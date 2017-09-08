import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navigation from '../containers/navigation'
import LeftDisplay from '../containers/left-display';
import FrameDataTable from '../containers/frame-data-table';
import FrameDataMobile from '../containers/frame-data-mobile';
import CharacterList from '../containers/character-list';
import NewsFeed from '../containers/news-feed';

/*
const App = () => (
    <div className="container-fluid">
        <div className="row">
            <Navigation />
        </div>
        <div className="row">
            <aside className="col-sm-3 hidden-xs hidden-sm">
                <LeftDisplay />
            </aside>
            <aside className="col-sm-3 col-sm-push-6 top-gutter-right">
                <CharacterList />
            </aside>
            <section className="col-sm-6 col-sm-pull-3">
                <div className="row top-gutter">
                    <div className="col-sm-12 hidden-xs hidden-sm">
                        <FrameDataTable />
                    </div>
                    <div className="col-sm-12 hidden-md hidden-lg">
                        <FrameDataMobile />
                    </div>
                </div>
            </section>
            
        </div>
    </div>
);

*/

class App extends Component {
    getMidSection() {
        if (this.props.character) {
            return (
                <div className="row top-gutter">
                    <div className="col-sm-12 hidden-xs hidden-sm">
                        <FrameDataTable />
                    </div>
                    <div className="col-sm-12 hidden-md hidden-lg">
                        <FrameDataMobile />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="row top-gutter">
                    <NewsFeed />
                </div>
            );
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Navigation />
                </div>
                <div className="row">
                    <aside className="col-sm-3 hidden-xs hidden-sm">
                        <LeftDisplay />
                    </aside>
                    <aside className="col-sm-3 col-sm-push-6 top-gutter-right">
                        <CharacterList />
                    </aside>
                    <section className="col-sm-6 col-sm-pull-3">
                        { this.getMidSection() }
                    </section>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        character: state.activeCharacter
    }
}

export default connect(mapStateToProps)(App);