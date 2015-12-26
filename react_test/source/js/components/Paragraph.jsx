var React = require('react');

var MyParaComponent = React.createClass({
  render: function () {
    return (
      <div>
        <p>{this.props.value}</p>
      </div>
    );
  }
});

module.exports = MyParaComponent;