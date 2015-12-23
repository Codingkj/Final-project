var React = require('react');

var MyButtonComponent = React.createClass({
	render: function (){
		return (<div>
			<button className = "button-style"> Press Here </button>
      </div>
      );
	}
});

module.exports = MyButtonComponent;
