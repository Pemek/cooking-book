import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import RecipeList from './containers/RecipeList/RecipeList';
import RecipeDetails from './containers/RecipeDetails/RecipeDetails';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/:id">
            <RecipeDetails />
          </Route> 
          <Route>
            <RecipeList />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
