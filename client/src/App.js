import React, { Component } from 'react';
import axios from 'axios';
import Blade from './majors/blade'
import NavBlock from './majors/NavBlock'

class App extends Component {
  state = { data: {} }
  
  mapBlades(){
    return this.state.data.blades.map( (blade, i) => (
      <Blade data={blade} key={i} />
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
      <div className="App Container">
        <NavBlock links={this.state.data.blades} />
        <div className="scroll">
          {renderBlades}
        </div>
      </div>
    );
  }
}

export default App;
