import React, {Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import {filterMoves, getCorrectedList} from '../actions/index';

class FrameDataTable extends Component {
    getMoves() {
        return getCorrectedList(this.props.character, this.props.filteredMoves, this.refs.searchText ? this.refs.searchText.value : '').map((move, index) => {
            return (
                 <tr key={index}>
                     <td>{move.command}</td>
                     <td>{move.level}</td> 
                     <td>{move.damage}</td>
                     <td>{move.speed}</td>
                     <td>{move.block}</td> 
                     <td>{move.hit}</td>
                     <td>{move.counter}</td>
                     <td>{move.notes}</td>
                 </tr>
            ); 
         });
    }

    render() {
        return (
            <div>
                <div className="row bottom-gutter-1">
                    <div className="col-sm-7">
                        <input ref="searchText" type="text" className="form-control" placeholder="Search Command" onChange={ () => this.props.filterMoves(this.props.character, this.refs.searchText.value) } />
                    </div>
                </div>
                <div className="row">
                    <table className="table table-bordered table-striped table-condensed">
                        <thead>
                            <tr>
                                <th>Command</th>
                                <th>Level</th> 
                                <th>Damage</th>
                                <th>Speed</th>
                                <th>Block</th> 
                                <th>Hit</th>
                                <th>Counter</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.getMoves() }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

//from redux
function mapStateToProps(state) {
    return {
        character: state.activeCharacter,
        filteredMoves: state.filteredMoves
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ filterMoves: filterMoves }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FrameDataTable);