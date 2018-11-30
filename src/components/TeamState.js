import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeamState extends Component{
    wicket() {
        let wkt = 0;
        this.props.worldxi.map(player => wkt += player.wicket)
        return wkt;
    }
    run() {
        let wkt = 0;
        this.props.worldxi.map(player => wkt += player.run)
        return wkt;
    }
    six() {
        let wkt = 0;
        this.props.worldxi.map(player => wkt += player.six)
        return wkt;
    }
    four() {
        let wkt = 0;
        this.props.worldxi.map(player => wkt += player.four)
        return wkt;
    }
    render() {
        return (
            <div>
                <h4>Team State</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="list-item">Wicket</div>
                        <div className="list-item right-button">{this.wicket()}</div>
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="list-item">Run</div>
                        <div className="list-item right-button">{this.run()}</div>
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="list-item">Six</div>
                        <div className="list-item right-button">{this.six()}</div>
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="list-item">Four</div>
                        <div className="list-item right-button">{this.four()}</div>
                    </li>
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

export default connect(mapStateToProps, null)(TeamState);