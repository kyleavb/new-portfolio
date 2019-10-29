import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  let state = { data: '' }

  axios.get('/data').then( (res) => {
    this.setState( {data: res.data} );
  });
  return (
    <div className="App">
      The Stuff
      {state.data}
    </div>
  );
}

export default App;
