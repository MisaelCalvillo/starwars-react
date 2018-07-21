import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import Tarjeta from './components/Tarjeta/Tarjeta';

class App extends Component {

  state = {
    planetas: [],
    planetaBusqueda: ''
  }

  componentDidMount() {

    axios.get("https://swapi.co/api/planets/")
    .then(res => {
       this.setState({ planetas: res.data.results })
       console.log(this.state.planetas)
    })
    .catch(err => {
      console.log(err);
    })

  }

  manejaCambio = (e) => {
    this.setState({planetaBusqueda: e.target.value })
  }
  
  render() {
    console.log("Render se ejecuto");

    return (
      <div className="App">
        <input type="text" value={this.state.planetaBusqueda} onChange={this.manejaCambio} />
        <div>{this.state.planetaBusqueda}</div>

        {this.state.planetas
          .filter(planeta => planeta.name.toLowerCase().includes(this.state.planetaBusqueda.toLowerCase()))
          .map((planeta, index) => <Tarjeta nombre={planeta.name} poblacion={planeta.population} key={index}/>)}
      </div>
    );
  }
}

export default App;
