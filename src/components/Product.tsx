import React from 'react';
import './Product.css'
interface User {
  first_name: string;
  last_name: string;
  email: string;
  department: string;
}

interface Props {
  keys: number;
  fn: string;
  ln: string;
  email: string;
  des: string;
}

const Product: React.FC<Props> = ({ keys, fn, ln, email, des }) => {
  return (
    <div className="card">
    <h1>{fn} {ln}</h1>
    <p className="title">{email}</p>
    <br/>
    <p>{des}</p>
    <br/>
    <p>{keys}</p>
  </div>
  );
};

export default Product
