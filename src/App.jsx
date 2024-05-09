import React , {useState} from 'react';
import Cart1 from './Cart1'
import Home from './Home/Home'
import Login from './Login/Login'
import Search from './search/Search'
import Sign from './Signup/Signup'
import Eco from './Ecommerce/Ecommmerce'
import {Routes,Route} from 'react-router-dom'

// import './styles/amazon.css';

const App = () => {
	
  return (
	// <Eco/>
	<div>
		<Routes>
		<Route path='/' element={<Home/>}></Route>
		<Route path='/login' element={<Login/>}></Route>
		<Route path='/sign' element={<Sign/>}></Route>
		<Route path='/search' element={<Search/>}></Route>
		<Route path='/eco' element={<Eco/>}></Route>
		<Route path='/cart' element={<Cart1/>}></Route>
		</Routes>
	</div>
  )
}

export default App

