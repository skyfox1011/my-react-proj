import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCharacter} from '../actions/index';

class Navigation extends Component {
    getNames() {
        return this.props.characters.map((character) => {
            return (<li key={character.id}><a onClick={ () => this.props.selectCharacter(character) }>{character.name}</a></li>)
        });
    }

    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid text-warning">
                    <div className="navbar-header">
                        <a href="" className="navbar-brand">My React Website</a>
                        <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar-main" aria-expanded="false">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar-main" className="navbar-collapse collapse" aria-expanded="true">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <a className="dropdown-toggle frame-data-drop-down" data-toggle="dropdown" id="characters" aria-expanded="false"><i className="fa fa-database">Frame Data</i><span className="caret"></span></a>
                                <ul className="dropdown-menu" aria-labelledby="characters">
                                    <li><a>Characters</a></li>
                                    <li className="divider"></li>
                                    {this.getNames()}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

//from redux
function mapStateToProps(state) {
    return {
        characters: state.characters,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectCharacter: selectCharacter }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Navigation);