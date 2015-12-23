var React = require('react');
var ReactDOM = require('react-dom');
var Paragraph = require('./components/Paragraph.jsx');
var PpButton = require('./components/Buttons.jsx');
var PpText = require('./components/TextInput.jsx');
var PpTextArea = require('./components/TextArea.jsx');
var Header = require('./components/Header.jsx');
var ProfileImage = require('./components/ProfileImage.jsx');
var Panel = require('./components/Panel.jsx');
var Map = require('./components/Map.jsx');


var PpHeader = React.createClass({
  render: function(){
    return (<div>
      <h4>Rejuvenation Health Club </h4>
      <Paragraph />
      <PpButton />

      <Header />
      <ProfileImage/>
      <PpTextArea />

      <Panel />
      <Header />
      <PpText />
      <PpText />
      <PpText/>
      <PpTextArea />
      <PpButton />

      <Header />
      <Panel />
      <Map />
      <PpText />
      </div>);
  }
})


var PpHeader1 = React.createElement(PpHeader);
ReactDOM.render(PpHeader1, document.querySelector('[data-react-application]'));
// ReactDOM.render(PpTextAreaName, document.querySelector('[data-react-button]'));
// ReactDOM.render(PpLine1, document.querySelector('[data-react-button]'));
// ReactDOM.render(PpHeader1, document.querySelector('[data-react-button]'));
