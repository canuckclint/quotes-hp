var React = require("react");
var helpers = require("../utils/API.js");
var NotificationSystem = require('react-notification-system');

var FavoriteQuotes = React.createClass({
    getInitialState: function () {
        return {
            allQuotes: []
        }
    },
    _notificationSystem: null,
    componentDidMount: function () {
        helpers.default.getQuotes().then(function (quotesData) {
            this.setState({ allQuotes: quotesData.data });
        }.bind(this));
        this._notificationSystem = this.refs.notificationSystem;
    },
    handleDelete: function (quotes, event) {
        event.preventDefault();
        helpers.default.deleteQuote(quotes._id).then(() => {
            helpers.default.getQuotes().then((quotesData) => {
                this.setState({ allQuotes: quotesData.data });
            });
        });
        this._notificationSystem.addNotification({
            message: 'Quote deleted',
            level: 'error',
            position: 'tl'
        });
    },
    handleFavorite: function (quotes, event) {
        event.preventDefault();
        helpers.default.favoriteQuote(quotes).then(() => {
            helpers.default.getQuotes().then((quotesData) => {
                this.setState({ allQuotes: quotesData.data });
            });
        });
        if (!quotes.favorited) {
            this._notificationSystem.addNotification({
                message: 'Quote unfavorited',
                level: 'warning',
                position: 'tl'
            });
        }
    },
    renderFavoriteQuotes: function () {
        return this.state.allQuotes.map(function (quotes, index) {
            if (quotes.favorited) {
                return (
                    <li className="list-group-item" key={index}>
                        <span className="glyphicon glyphicon-star yellow" onClick={this.handleFavorite.bind(this, quotes)}></span>
                        <span className="glyphicon glyphicon-trash pull-right" onClick={this.handleDelete.bind(this, quotes)}></span>
                        <br />{quotes.text}
                    </li>
                );
            }
        }.bind(this));
    },
    render: function () {
        return (
            <div className="row quotes-section">
                <NotificationSystem ref="notificationSystem" />
                <div className="col-md-12 clearfix quote-section">
                    <h4 className="text-center">Favorite quotes</h4>
                    <div className="col-md-12 divider-image"></div>
                    <ul className="clearfix" id="quote-list">
                        {this.renderFavoriteQuotes()}
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = FavoriteQuotes;
