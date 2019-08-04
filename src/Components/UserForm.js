import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setUserData } from '../store/ducks/user';
import { setSearchValue } from '../store/ducks/products';

import Input from './Input';
import AutoSuggest from './AutoSuggest';

function UserForm({ submitForm, setProductSearchQuery, history }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [search, setSearch] = useState('');
  const isValid = [firstName, lastName, phone, email, street, city, state].every(e => !!e.trim());
  function setAddress({ street, city, state }) {
    setStreet(street);
    setCity(city);
    setState(state);
  }
  function handleSubmit() {
    submitForm({ firstName, lastName, phone, email, street, city, state });
    setProductSearchQuery(search);
    history.push('/products');
  }
  return (
    <form>
      <div className="form-row">
        <Input id="firstName" type="text" placeholder="First name" value={firstName} onChange={setFirstName} classes="col-md-6 mb-3" required/>
        <Input id="lastName" type="text" placeholder="Last name" value={lastName} onChange={setLastName} classes="col-md-6 mb-3" required/>
      </div>
      <div className="form-row">
        <Input id="phone" type="tel" label="Phone" placeholder="Format: 123-456-7890" value={phone} onChange={setPhone} classes="col-md-6 mb-3" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
        <Input id="email" type="email" placeholder="Email" value={email} onChange={setEmail} classes="col-md-6 mb-3" required/>
      </div>
      <div className="form-row">
        <AutoSuggest classes="col-md-12 mb-3" fillForm={setAddress} required />
      </div>
      <div className="form-row">
        <Input id="street" type="text" placeholder="Street" value={street} classes="col-md-8 mb-3" required disabled/>
      </div>
      <div className="form-row">
        <Input id="city" type="text" placeholder="City" value={city} classes="col-md-6 mb-3" required disabled/>
        <Input id="state" type="text" placeholder="State" value={state} classes="col-md-6 mb-3" required disabled/>
      </div>
      <div className="form-row">
        <Input id="search" type="text" label="Product search" placeholder="Try CBD, flower, or hybrid" value={search} onChange={setSearch} classes="col-md-6 mb-3" />
      </div>
      <button className="btn btn-primary" type="submit" onClick={handleSubmit} disabled={!isValid}>Next</button>
    </form>
  );
}

export default withRouter(connect(null, { submitForm: setUserData, setProductSearchQuery: setSearchValue })(UserForm));