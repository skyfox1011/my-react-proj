import React, {Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import {filterMoves, getCorrectedList} from '../actions/index';

class FrameDataMobile extends Component {
    
    getMoves() {
        return getCorrectedList(this.props.character, this.props.filteredMoves, this.refs.searchText ? this.refs.searchText.value : '').map((move, index) => {
            return (
                <div key={index} className="row">
                    <div className="col-xs-12 text-center">
                        <h3>{move.command}</h3>
                        <p>{move.level} {move.damage}<b>(dmg)</b></p>
                    </div>
                    <div className="col-xs-12">
                        Notes: {move.notes}
                    </div>
                    <div className="col-xs-12">
                        <table className="table table-bordered table-striped table-condensed">
                            <thead>
                                <tr>
                                    <th>Speed</th>
                                    <th>Block</th> 
                                    <th>Hit</th>
                                    <th>Counter</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{move.speed}</td>
                                    <td>{move.block}</td> 
                                    <td>{move.hit}</td>
                                    <td>{move.counter}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                 
            ); 
         });
    }

    render() {
        return (
            <div>
                <h1 className="text-center text-danger">{this.props.character.name}</h1>
                <div className="row bottom-gutter-1">
                    <div className="col-sm-7">
                        <input ref="searchText" type="text" className="form-control" placeholder="Search Command" onChange={ () => this.props.filterMoves(this.props.character, this.refs.searchText.value) } />
                    </div>
                </div>
                { this.getMoves() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        character: state.activeCharacter,
        filteredMoves: state.filteredMoves
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ filterMoves: filterMoves }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FrameDataMobile);