import React, { createContext, useReducer } from 'react';
import { ProductReducer } from './productReducer';

export const productContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useReducer(ProductReducer, [
    {
      id: 1,
      name: 'Virsa',
      price: 40,
      image:
        'https://www.libertybooks.com/image/cache/catalog/Ecom/shop%20by%20category/July1-184x229.jpg?q6',
      productStatus: 'hot',
    },
    {
      id: 2,
      name: 'Ego Enemy',
      price: 200,
      image:
        'https://www.libertybooks.com/image/cache/catalog/Shop%20by%20Category/9781781257029-640x996-184x229.jpg?q6',
      productStatus: 'new',
    },
    {
      id: 3,
      name: 'Bible to Go',
      price: 300,
      image:
        'https://www.libertybooks.com/image/cache/catalog/RP9780446580519-120x187.jpg?q6',
      productStatus: 'new',
    },
    {
      id: 4,
      name: 'The Secret Weapon',
      price: 150,
      image:
        'https://www.libertybooks.com/image/cache/catalog/9781406390582-120x187.jpg?q6',
      productStatus: 'new',
    },
    {
      id: 5,
      name: 'Arsene Wenger',
      price: 160,
      image:
        'https://www.libertybooks.com/image/cache/catalog/9781474618267-120x187.jpg?q6',
      productStatus: 'hot',
    },
    {
      id: 6,
      name: 'The Lost Symbol',
      price: 500,
      image:
        'https://www.libertybooks.com/image/cache/catalog/9780552161237-120x187.jpg?q6',
      productStatus: 'new',
    },
    {
      id: 7,
      name: 'Vanashing tar',
      price: 240,
      image:
        'https://www.libertybooks.com/image/cache/Adnan_khan/The-Vanishing-Stair-Paperback-120x187.jpg?q6',
      productStatus: 'hot',
    },
    {
      id: 8,
      name: 'Brilliant',
      price: 120,
      image:
        'https://www.libertybooks.com/image/cache/catalog/brilliant-9781447248774-120x187.jpg?q6',
      productStatus: 'new',
    },
  ]);

  return (
    <productContext.Provider value={{ products }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
