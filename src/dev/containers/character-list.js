import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCharacter} from '../actions/index';

class CharacterList extends Component {
    createList() {
        return this.props.characters.map((character) => {
            return (
                <img key={character.id} alt={character.name} src={character.icon} className="col-xs-2 icon" onClick={ () => this.props.selectCharacter(character) }/>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="row affix hidden-xs hidden-sm">{this.createList()}</div>
                <div className="row hidden-md hidden-lg">{this.createList()}</div>
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectCharacter: selectCharacter }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CharacterList);