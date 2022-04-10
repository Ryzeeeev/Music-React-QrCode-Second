import React, { useState, useEffect } from 'react';
import Song from "./Song";
import { test } from './Data';




function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
     test().then((res) => setData(res));
   }, []); 


  return( 
   <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
          <div className="navbar-header">
              <a className="navbar-brand" href="#">
                  Ryze - Song
              </a>
          </div>

      </div>
      </nav>

      <div className="container">
        <h3>Choose your song: </h3>
        {data.map((value, index) => (
          <Song link = {value.link} nom = {value.author} description = {value.description} image={value.image} />
        ))}
      </div>
   </div>
    );
}

export default App;
