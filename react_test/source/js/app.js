

var React = require('react');
var ReactDOM = require('react-dom');
var ApplicationStart = require('./components/ApplicationStart.jsx');

var StartApplication = React.createClass({
  render: function(){
    return (<div>
      <ApplicationStart />
      </div>
      );
    }
  });

var StartPage = React.createElement(StartApplication);
ReactDOM.render(StartPage, document.querySelector('[data-react-application]'));
