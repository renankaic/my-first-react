import React, { Component, Fragment } from 'react'
import Tabela from './components/Tabela'
import Formulario from './components/Formulario'
import Header from './components/Header'
import PopUp from './components/PopUp'
import 'materialize-css/dist/css/materialize.min.css'
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

    PopUp.showMessage('error', "Autor removido com sucesso!")

  }

  submitListener = autor => {

    this.setState({ autores: [...this.state.autores, autor ]})

    PopUp.showMessage('success', "Autor adicionado com sucesso!")

  }

  render() {

    return (
        <Fragment>
          <Header />

          <div className="container mb-10">
            <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
            <Formulario  submitListener={this.submitListener} />
          </div>
        </Fragment>
    );

  }
  
}

export default App;
