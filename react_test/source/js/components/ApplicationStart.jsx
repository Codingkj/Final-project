var React = require('react');
var ReactDOM = require('react-dom');

var Paragraph = require('./Paragraph.jsx');
var PpButton = require('./Buttons.jsx');
var PpText = require('./TextInput.jsx');
var PpTextArea = require('./TextArea.jsx');
var Header = require('./Header.jsx');
var ProfileImage = require('./ProfileImage.jsx');
var Panel = require('./Panel.jsx');
var Map = require('./Map.jsx');


var ApplicationStart = React.createClass({
  render: function(){
    return (<div>
      <h1>Rejuvenation Health Club </h1>
      <Paragraph value='Welcome to Rejuvenation. We specialise in MASSAGE, ACUPUNCTURE and Reiki practices.'/>
      <PpButton type="button" value="Book an Appointment"/>

      <Header defaultValue="Our Practitioners"/>
      <ProfileImage src="#"/>
      <Paragraph className="profile-text" value="Angelo is a well-qualified and experienced massage therapist. He can offer Reiki, Sports Massages or a nice relaxing massage."/>
      
      <ProfileImage src="#"/> 
      <Paragraph className="profile-text" value="Dr Micheals has worked at Rejuvenation now for 7 year and has a wealth of experience in the Acupuncture field. He works Monday to Thursday at the clinic." />
      <Panel />
      <Header defaultValue = "Contact Form"/>
      <PpText placeholder="<Enter your first name>"/>
      <PpText placeholder="<Enter your last name>"/>
      <PpText placeholder="<your email address>"/>
      <PpText placeholder="<your phone number>" />
      <PpTextArea placeholder="<Your Question?>"/>
      <PpButton value="Send"/>

      <Header defaultValue="Our location"/>
      <Panel />
      <Map src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39742.75011544772!2d-0.093348!3d51.496301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876030d54f96c6d%3A0xcdb3274daab69673!2sLondon+SE1%2C+UK!5e0!3m2!1sen!2suk!4v1450884255041"  frameborder="0" allowfullscreen />
      <Paragraph className="location-text" value="Street Address: 1122 Goodie Avenue, London, SE1 4U2"/>
      <Paragraph className="location-text" value="Office Phone: 555-2434"/>
      <Paragraph className="location-text" value="Email address: service@practice.com"/>
      </div>);
  }
});

module.exports = ApplicationStart;
