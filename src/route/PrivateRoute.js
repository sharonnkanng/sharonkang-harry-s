import React from 'react'
import ProductDetail from '../page/ProductDetail'
import LogIn from '../page/LogIn';
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({authenticate}) => {
  return authenticate ? <ProductDetail/> : <Navigate to="../login"/> }
//   <Navigate to="./login"/> ??

export default PrivateRoute