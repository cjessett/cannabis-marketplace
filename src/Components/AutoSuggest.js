import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import Script from 'react-load-script';

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

const getSuggestionValue = suggestion => suggestion.description;
const renderSuggestion = suggestion => (<div>{suggestion.description}</div>);

export default class AutoSuggest extends Component {
  constructor() {
    super();
    this.state = { value: '', suggestions: [], noSuggestions: false };
    this.service = null;
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  }

  onChange(event, { newValue }) {
    this.setState({ value: newValue });
    if (!newValue) this.props.fillForm({ street: '', city: '', state: '' });
  }

  onSuggestionsFetchRequested({ value }) {
    this.service.getQueryPredictions({ input: value }, (suggestions, status) => {
      status !== google.maps.places.PlacesServiceStatus.OK ?
        this.setState({ suggestions: [], noSuggestions: true }) :
        this.setState({ suggestions, noSuggestions: false });
    });
  }

  onSuggestionsClearRequested() {
    this.setState({ suggestions: [], noSuggestions: false });
  }
  
  onSuggestionSelected(event, { suggestion }) {
    const [{ value: number }, { value: street }, { value: city }, { value: state }] = suggestion.terms;
    this.props.fillForm({ street: `${number} ${street}`, city, state });
  }
  
  handleScriptLoad() {
    /* global google */
    this.service = new google.maps.places.AutocompleteService();
  }

  render() {
    const { value, suggestions, noSuggestions } = this.state;

    const inputProps = {
      placeholder: 'Type your address',
      value,
      onChange: this.onChange,
      className: 'form-control',
    };

    return (
      <div className={this.props.classes}>
        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`}
          onLoad={this.handleScriptLoad}
        />
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          required
        />
        {noSuggestions &&
          <div className="react-autosuggest__suggestions-container--open no-suggestions">
            Couldn't find that address, try again please
          </div>}
      </div>
    );
  }
}