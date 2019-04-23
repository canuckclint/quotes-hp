var React = require("react");
var Link = require("react-router").Link;

var Navbar = React.createClass({
    render: function () {
        return (
            <div className="row header">
                <nav className="navbar navbar-default" id="navbar" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">Quotes</Link>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/save-quote"><span className="glyphicon glyphicon-home"></span> Home</Link></li>
                            <li><Link to="/saved-quotes"><span className="glyphicon glyphicon-heart"></span> Favorites</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
});
module.exports = Navbar;