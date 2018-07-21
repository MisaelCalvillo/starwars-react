import React, { Component } from 'react';

import './Tarjeta.css';

class Tarjeta extends Component {

  render() {

    const { nombre, poblacion } = this.props;

    return (
      <div className="Tarjeta">
       <p>{nombre}</p>
       <p>{poblacion}</p>
      </div>
    )
  }

}

export default Tarjeta;
