import React from 'react';

var Emptyresult = React.createClass({
	render: function() {
	  return (
	    <div className="alert alert-info" role="alert">
	    	<h1>{this.props.noResultsString}</h1>
	    </div>
	  );
	}
})

export default Emptyresult;
