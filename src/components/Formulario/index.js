import React, { Component, Fragment } from 'react'
import FormValidator from '../../utils/FormValidator'

class Formulario extends Component {

    constructor(props) {

        super(props)

        this._validator = new FormValidator([
            {
                field: 'nome',
                method: 'isEmpty',
                validWhen: false,
                message: 'Entre com um nome'
            }, 
            {
                field: 'livro',
                method: 'isEmpty',
                validWhen: false,
                message: 'Entre com um livro'
            },
            {
                field: 'preco',
                method: 'isInt',
                validWhen: true,
                message: 'Entre com um valor numérico',
                args: [{
                    min: 0,
                    max: 99999
                }]
            }

        ])

        this._initialState = {
            nome: '',
            livro: '',
            preco: '',
            validation: this._validator.valid()
        }

        this.state = this._initialState

    }

    inputListener = event => {

        const { name, value } = event.target

        this.setState({
            [name]: value
        })

    }

    submitForm = () => {

        const validation = this._validator.validate(this.state)

        if (validation.isValid){

            this.props.submitListener(this.state)
            this.setState(this._initialState)

        } else {

            const { nome, livro, preco } = validation
            const fields = [nome, livro, preco]

            const invalidFields = fields.filter(elem => {
                return elem.isInvalid
            })

            invalidFields.forEach(console.log)

        }

    }

    render() {

        const { nome, livro, preco } = this.state

        return (
            <Fragment>
                <form>
                    <div className="row">
                        <div className="input-field col s4">
                            <label className="input-field" htmlFor="nome">Nome</label>
                            <input
                                className="validate"
                                id="nome"
                                type="text"
                                name="nome"
                                value={nome}
                                onChange={this.inputListener}
                            />
                        </div>

                        <div className="input-field col s4">
                            <label className="input-field" htmlFor="livro">Livro</label>
                            <input
                                className="validate"
                                id="livro"
                                type="text"
                                name="livro"
                                value={livro}
                                onChange={this.inputListener}
                            />
                        </div>

                        <div className="input-field col s4">
                            <label className="input-field" htmlFor="preco">Preço</label>
                            <input
                                className="validate"
                                id="preco"
                                type="text"
                                name="preco"
                                value={preco}
                                onChange={this.inputListener}
                            />
                        </div>
                    </div>

                    <button className="waves-effect waves-light indigo lighten-2 btn" onClick={this.submitForm} type="button">Salvar</button>
                </form>
            </Fragment>
        )

    }

}

export default Formulario
