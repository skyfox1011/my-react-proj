import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchInput extends Component {
    render() {
        return (
            <div className="row bottom-gutter-1">
                <div className="col-sm-7">
                    <input ref="searchText" type="text" className="form-control" placeholder="Search Command" />
                </div>
            </div>
        );
    }
}

export default SearchInput;