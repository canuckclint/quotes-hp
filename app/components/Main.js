var React = require("react");
var Link = require("react-router").Link;
import Navbar from "./Navbar";
import Footer from "./Footer";

var Main = React.createClass({
  render: function () {
    return (
      <div className="container">
        <Navbar/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
});

module.exports = Main;
