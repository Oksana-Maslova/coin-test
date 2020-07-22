import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/main/MainContainer';
import Coin from './pages/coin/CoinContainer';

export default function renderRoutes() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route path="/coin/:id" render={(params) => <Coin params={params}/>} />
      </Switch>
    )
}
