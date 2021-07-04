import React from 'react';
import { Route, Switch } from 'react-router-dom';
import pages from '../src/pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ pages.Home }/>
      <Route exact path="/wallet" component={ pages.Wallet }/>
      <Route exact path="/star-wars" component={ pages.StarWars }/>
      <Route exact path="/makeup-shop" component={ pages.MakeupShop }/>
      <Route exact path="/movie-card" component={ pages.MovieCardLibrary }/>
      <Route exact path="/stranger-things" component={ pages.StrangeThings }/>
      <Route exact path="/recipes" component={ pages.Recipes }/>
    </Switch>
  )
}

export default Routes;