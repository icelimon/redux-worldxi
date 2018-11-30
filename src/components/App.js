import React, { Component } from 'react';

import '../styles/index.css';

import PlayerList from './PlayerList';
import WorldXI from './WorldXI';
import TeamState from './TeamState';

class App extends Component{
    render() {
        return (
            <div className="App">
                <h4>Players</h4>
                <div className="row">
                    <div className="col-4">
                        <PlayerList />
                    </div>
                    <div className="col-4">
                        <WorldXI />
                    </div>
                    <div className="col-4">
                        <TeamState />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;