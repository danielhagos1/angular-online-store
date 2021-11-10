export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 699,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 699,
    description: ''
  },
  {
    id: 4,
    name: 'Laptop XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 5,
    name: 'Laptop Mini',
    price: 799,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 6,
    name: 'Laptop Standard',
    price: 799,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/