import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { io } from "socket.io-client";

function App() {
  const [args, setArgs] = useState({MSTID: '39271', Match: '21', First: 'Jake', Last: 'Kieffer', Nationality:  'SWE'});
  const con = io("https://mst-full-stack-dev-test.herokuapp.com/");

  useEffect(()=>{
    con.once("data-update", (...player) => {
      setArgs(player[0]);
      }, [con.id]);
  });
  
  let details = [];
  for( let x in args) {
    details.push(<><td>{x}</td><td>{args[x]}</td></>);
  }
  return (
      <div>
      <table>
        <tbody>
        {details.map(detail => (
          <tr key={uuidv4()}>{detail}</tr>
        ))}
        </tbody>
      </table>
      </div>
  )
}

export default App;

