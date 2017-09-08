import React, {Component} from 'react';
import {connect} from 'react-redux';

class LeftDisplay extends Component {
    render() {
        if (!this.props.character) {
            return (<div className="row"></div>);
        }
        return (
            <div className="row">
                    <img id="sidebar" className="affix" alt={this.props.character.name} src={this.props.character.image} />
            </div>
        );
    }
}

//from redux
function mapStateToProps(state) {
    return {
        character: state.activeCharacter
    }
}

export default connect(mapStateToProps)(LeftDisplay);