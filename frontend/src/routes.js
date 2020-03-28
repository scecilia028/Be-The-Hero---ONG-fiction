import React from 'react';
import { BrowserRouter, Route, Switch}  from 'react-router-dom'; //rotas


import Logon from './pages/Logon';
import Register  from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

/*
BrowserRouter:  precisa estar por volta de tudo
Switch: garante só uma rota executada por momento
Router path= "/": O caminho para acessar a rota
*/

export default function Routes(){
    return (
        <BrowserRouter> 
            <Switch> 
              <Route path="/" exact component={Logon} ></Route>
              <Route path="/register" component={Register} ></Route>
              <Route path="/profile" component={Profile} ></Route>
              <Route path="/incidents/new" component={NewIncident} ></Route>
            </Switch>
        </BrowserRouter>


    );
}
 