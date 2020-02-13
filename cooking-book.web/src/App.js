import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/Layout/Layout';
import RecipeList from './containers/RecipeList/RecipeList';
function App() {
  return (
    <Layout>
      <RecipeList />
    </Layout>
  );
}

export default App;
