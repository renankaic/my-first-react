import React, { Component, Fragment } from 'react'

class Formulario extends Component {

    constructor(props) {

        super(props)

        this.state = {
            nome: '',
            livro: '',
            preco: ''
        }

    }

    inputListener = event => {

        const { name, value } = event.target

        this.setState({
            [name]:[value]
        })

    }

    render() {

        const { nome, livro, preco } = this.state

        return (
            <Fragment>
                <form>

                    <label htmlFor="nome">Nome</label>
                    <input
                        id="nome"
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={this.inputListener}
                    />

                    <label htmlFor="livro">Livro</label>
                    <input
                        id="livro"
                        type="text"
                        name="livro"
                        value={livro}
                        onChange={this.inputListener}
                    />

                    <label htmlFor="preco">Preço</label>
                    <input
                        id="preco"
                        type="text"
                        name="preco"
                        value={preco}
                        onChange={this.inputListener}
                    />

                    <button type="button">Salvar</button>
                </form>
            </Fragment>
        )

    }

}

export default Formulario
