import React, { Component } from 'react';
import Script from 'react-load-script';

const API_KEY = 'AIzaSyCc5ia8Pnxl2pVK_tgri6jmtZJAHCq8uAU'

export default class AutoComplete extends Component {
  constructor(props) {
    super(props);    
    this.state = { predictions: [] };
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    this.geoLocate = this.geoLocate.bind(this);
  }

  handleScriptLoad() {
    /* global google */
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current, { types: ['geocode'] });
    this.autocomplete.setFields(['address_component']);
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }
  
  geoLocate() {
    const auto = this.autocomplete;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const circle = new google.maps.Circle(
            {center: geolocation, radius: position.coords.accuracy});
        auto.setBounds(circle.getBounds());
      });
    }
  }
  
  handlePlaceSelect() {
    const address = this.autocomplete.getPlace().address_components;
    const [number, street, city, county, state, country, zip] = address; // eslint-disable-line no-unused-vars
    this.props.fillForm({
      street: `${number.short_name} ${street.short_name}`,
      city: city.short_name,
      state: state.short_name,
      zip: zip.short_name,
    });
  }

  render() {
    return (
      <div className={this.props.classes}>
        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`}
          onLoad={this.handleScriptLoad}
        />
        <label htmlFor="autocomplete">Address</label>
        <input
          type="text"
          ref={this.autocompleteInput}
          onFocus={this.geoLocate}
          id="autocomplete"
          placeholder="Address"
          className="form-control"
          required={this.props.required}
        />
      </div>
    );
  }
}