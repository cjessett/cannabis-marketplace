import React from 'react';

const defaultSrc = 'https://s3-us-west-1.amazonaws.com/iheartjane/images/stock_photos/general/indica.png';

export default function Product({ name, brand, category, kind_subtype, kind, photos }) {
  const src = photos[0].urls.small;
  const kindSub = kind_subtype || kind;
  return (
    <div className="col-auto mb-3">
      <div className="card">
        <img src={src || defaultSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-muted">{category && category.toUpperCase()}</h5>
          <h4 className="card-title">{name}</h4>
          <h5 className="card-subtitle mb-2">{brand}</h5>
          <h6 className="card-subtitle mb-5 text-muted">{kindSub && kindSub.toUpperCase()}</h6>
          <a href="#add" className="btn btn-success">Add to Cart</a>
        </div>
      </div>
    </div>
  );
}