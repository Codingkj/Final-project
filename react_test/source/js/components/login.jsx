var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var TextInput = require('./TextInput.jsx');
var Button = require('./Button.jsx');

var LoginPage = React.createClass({
  render: function(){
    return (<div>
      <h2>So that we know its you can you please login: </h2>
      <Paragraph value="Your Email:"/>
      <TextInput placeholder="yourname@gmail.com" />
      <Button defaultValue="LOGIN" />
      </div>
