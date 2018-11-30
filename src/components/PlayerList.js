import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions';

class PlayerList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.players.map((player, index) => {
                        return(
                            <li className="list-group-item" key={index}>
                                <div className="list-item">
                                    {player.name}
                                </div>
                                <div onClick={() => this.props.addPlayer(player.id)} className="list-item right-button">+</div>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps, {addPlayer})(PlayerList);