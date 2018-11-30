import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePlayer } from '../actions';

class WorldXI extends Component{
    render() {
        return (
            <div>
                <ul classname="list-group">
                    {
                        this.props.worldxi.map((player, index) => {
                            return (
                                <li className="list-group-item" key={index}>
                                    <div className="list-item">{player.name}</div>
                                    <div onClick={()=>this.props.removePlayer(player.id)} className="list-item right-button">x</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        worldxi: state.worldxi
    }
}

export default connect(mapStateToProps, {removePlayer})(WorldXI);