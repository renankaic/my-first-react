import React, { Fragment, Component } from 'react'
import Header from '../Header'
import DataTable from '../DataTable'
import ApiService from '../../services/ApiService'
import PopUp from '../PopUp'

class Autores extends Component {

    constructor() {

        super()
        this.state = {
            nomes: [],
            titulo: 'Autores'
        }

    }

    componentDidMount() {

        ApiService.ListNames()
            .then(res => {
                this.setState({ nomes: [...this.state.nomes, ...res.data]})
            })
            .catch(err => PopUp.showMessage('error', 'Erro na comunicacao com a API'))

    }

    render() {

        return (
            <Fragment>
                <Header />

                <div className="container">
                    <h1>Autores</h1>
                    <DataTable dados={this.state.nomes} titulo={this.state.titulo} colunas={['nome']} ></DataTable>
                </div>
            </Fragment>
        )

    }

}

export default Autores