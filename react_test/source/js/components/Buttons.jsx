var React = require('react');

var MyButtonComponent = React.createClass({
	render: function (){
		return (<div>
			<button type={this.props.type} className="button-style">{this.props.value}</button>
      </div>
      );
	}
});

module.exports = MyButtonComponent;
