import React, { Fragment, Component } from 'react'
import Header from '../Header'
import DataTable from '../DataTable'
import ApiService from '../../services/ApiService'

class Livros extends Component {

    constructor() {

        super()
        this.state = {
            livros: [],
            titulo: 'Livros'
        }

    }

    componentDidMount() {

        ApiService.ListBooks()
            .then(res => {
                this.setState({
                    livros: [...this.state.livros, ...res.data]
                })
            })

    }

    render(){
       
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Livros</h1>
                    <DataTable dados={this.state.livros} titulo={this.state.titulo} colunas={['livro']}/>
                </div>
            </Fragment>
        )

    }

}

export default Livros