import React, { Component, Fragment } from 'react'
import Tabela from './components/Tabela'
import Formulario from './components/Formulario'
import 'materialize-css/dist/css/materialize.min.css'

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

  submitListener = autor => {

    this.setState({ autores: [...this.state.autores, autor ]})

  }

  render() {

    return (
        <Fragment>
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Formulario  submitListener={this.submitListener} />
        </Fragment>
    );

  }
  
}

export default App;
