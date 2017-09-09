import React, {Component} from 'react';
import {connect} from 'react-redux';
import Body from './body';

class NewsFeed extends Component {
    getMedia(item) {
        if (item.image) {
            return (
                <div className="row">
                    <img  alt={item.image} className="col-sm-12 col-xs-12" src={item.image} />
                </div>
            );
        }
        else if (item.vid) {
            return (
                <div className="embed-responsive embed-responsive-4by3">
                    <iframe title={item.vid} className="embed-responsive-item" src={item.vid}></iframe>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }

    getNews() {
        return this.props.news.map((item, index) => {
            return (
                <div key={index} className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                         <div className={index % 2 === 0 ? 'panel panel-primary' : 'panel panel-warning'}>
                            <div className="panel-heading">
                                {item.author}
                            </div>
                            <div className="panel-body">
                                <h3 className="text-center">{item.subject}</h3>
                                {this.getMedia(item)}
                                <Body text={item.body} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        if (this.props.news) {
            return (
                <div>{this.getNews()}</div>
            );
        }
        else {
            return (<div className="row">There are no news</div>);
        }
    }
}

//from redux
function mapStateToProps(state) {
    return {
        news: state.news
    }
}

export default connect(mapStateToProps)(NewsFeed);