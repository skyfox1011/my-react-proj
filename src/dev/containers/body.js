import React, {Component} from 'react';

class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expand: false
        }
    }

    toggleState() {
        this.setState({ expand: !this.state.expand });
    }

    render() {
        if (this.props.text.length <= 200) {
            return (
                <div>
                    <p>{this.props.text}</p>
                </div>
            );
        }
        else {
            if (this.state.expand) {
                return (
                    <div>
                        <p>{this.props.text}</p>
                        <button className="btn btn-sm btn-link" onClick={this.toggleState.bind(this)}>Show Less</button>
                    </div>
                );
            }
            else {
                return (
                    <div>
                        <p>{this.props.text.substring(0, 200)}...</p>
                        <button className="btn btn-sm btn-link" onClick={this.toggleState.bind(this)}>Show More</button>
                    </div>
                );
            }
        }
    }
}

export default Body;