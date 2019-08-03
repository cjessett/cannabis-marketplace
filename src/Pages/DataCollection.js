import React from 'react';

import UserForm from '../Components/UserForm';

export default function DataCollectionPage() {
  return (
    <div className="d-flex flex-column container-fluid justify-content-center m-3 p-3">
      <header>
        <h2 className="d-flex justify-content-center mb-5">Cannabis Marketplace</h2>
      </header>
      <section className="d-flex justify-content-center">
        <UserForm />
      </section>
    </div>
  );
}