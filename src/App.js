
import { useState, useEffect } from 'react';
import React from 'react';
import { io } from "socket.io-client";
import './App.css';


function App() {
  const [args, setArgs] = useState([]);
  const socket = io("https://mst-full-stack-dev-test.herokuapp.com/");

  useEffect(() => {
    socket.on('data-update', (...args) => {
    setArgs(args[0]);
    },[args]);
    
  });

  return (
    <div>
      <table>
        <tr>
          <td>First: </td>
          <td>{args.First}</td>
        </tr>
        <tr>
          <td>Last: </td>
          <td>{args.Last}</td>
        </tr>
      </table>
    </div>
  )

}

export default App;

