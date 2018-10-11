import React from 'react';;
import Signin from '../signin/Signin.js';

const Navigation = () =>{
  return(
    <nav style={{display: 'flex', justifyCount: 'flex-end'}}>
     <p onClick={ () => onRoutechange('SignIn')} className'f3 link dim black underlne pa3 pointer'>SignOut </p>
  )
}

export default Navigation;
