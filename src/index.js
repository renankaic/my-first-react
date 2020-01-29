import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css'
import App from './App'
import Sobre from './components/Sobre'
import Livros from './components/Livros'
import Autores from './components/Autores'
import NotFound from './components/NotFound'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App} />
            <Route path='/sobre' component={Sobre} />
            <Route path='/autores' component={Autores} />
            <Route path='/livros' component={Livros} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
