import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import NotFound from './components/NotFound/NotFound';

import './App.scss';

function App() {
    
    return (
        <>
            <div className="app">
                <div className="container-xl pb-4">
                    <Switch>
                        <Route exact path='/' render={() => <PokemonList></PokemonList>} />
                        <Route path='/pokemon/:id' render={() => <PokemonDetail></PokemonDetail>}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </div>
            </div>
        </>
    );
}

export default App;
