import React, { Component } from 'react';
import axios from 'axios';
import Blade from './majors/blade'
import './App.css';

class App extends Component {
  state = { data: {} }
  
  mapBlades(){
    return this.state.data.blades.map( (blade, i) => (
      <Blade className="info-blade" data={blade} key={i} />
    ))
  }

  componentDidMount() {
    axios.get('/data').then( (res) => {
      this.setState( {data: res.data} );
    });
  }

  render() {
    let renderBlades = this.state.data.blades ? this.mapBlades() : '';
    return (
      <div className="App">
        {renderBlades}
      </div>
    );
  }
}

export default App;
