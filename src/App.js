import React, { Component, Fragment } from 'react'
import Tabela from './components/Tabela'
import Formulario from './components/Formulario'
import Header from './components/Header'
import PopUp from './components/PopUp'
import ApiService from './services/ApiService'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css'

class App extends Component {

	constructor(props) {

		super()
		this.state = {
			autores: []
		}
	}

	removeAutor = (id) => {

		const { autores } = this.state;

		ApiService.RemoveAuthor(id).then(res => {

			this.setState(
				{
					autores: autores.filter(autor => {
						return autor.id !== id
					})
				}
			)

			PopUp.showMessage('error', "Autor removido com sucesso!")

		})

	}

	submitListener = author => {

		ApiService.CreateAuthor(JSON.stringify(author))
			.then(res => res.data)
			.then(lastCreatedAuthor => {

				this.setState({ autores: [...this.state.autores, lastCreatedAuthor] })
				PopUp.showMessage('success', "Autor adicionado com sucesso!")

			})

	}

	componentDidMount() {

		ApiService.ListAuthors().then(res => {
			this.setState({ autores: [...this.state.autores, ...res.data] })
		})

	}

	render() {

		return (
			<Fragment>
				<Header />

				<div className="container mb-10">
					<h1>Casa do Código</h1>
					<Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
					<Formulario submitListener={this.submitListener} />
				</div>
			</Fragment>
		);

	}

}

export default App;
