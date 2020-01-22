import React, { Component, Fragment } from 'react'
import Tabela from './components/Tabela'
import Formulario from './components/Formulario'
import './App.css'

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ]
  }

  removeAutor = (index) => {

    const  { autores } = this.state;

    this.setState(
      {
        autores : autores.filter((autor, posAtual) => {
          return posAtual !== index
        })
      }
    )

  }

  render() {

    return (
        <Fragment>
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Formulario />
        </Fragment>
    );

  }
  
}

export default App;
