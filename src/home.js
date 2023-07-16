import React from 'react';
import Card from './context.js';
import ReactDOM from 'react-dom';
import { Outlet, Link } from "react-router-dom";

function Home(){

  return (
    <><Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image" />)} /><>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/a1">Blogs</Link>
            </li>
            <li>
              <Link to="/a2">Contact</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </></>
    
  );   
}


export default Home;