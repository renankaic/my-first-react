import React, { Component, Fragment } from 'react'

class Formulario extends Component {

    constructor(props) {

        super(props)

        this.state = {
            nome: '',
            livro: '',
            valor: ''
        }

    }

    render() {

        const { nome, livro, valor } = this.state

        return (
            <Fragment>
                <form>

                    <label htmlFor="nome">Nome</label>
                    <input
                        id="nome"
                        type="text"
                        name="nome"
                        value={nome}
                    />

                    <label htmlFor="livro">Livro</label>
                    <input
                        id="livro"
                        type="text"
                        name="livro"
                        value={livro}
                    />

                    <label htmlFor="preco">Preço</label>
                    <input
                        id="preco"
                        type="text"
                        name="preco"
                        value={valor}
                    />

                    <button type="button">Salvar</button>
                </form>
            </Fragment>
        )

    }

}

export default Formulario
