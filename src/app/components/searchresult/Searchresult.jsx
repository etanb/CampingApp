import React from 'react';

var Searchresult = React.createClass({
	render: function() {
	  return (
	    <div className="search-result">
	    	<h1>{this.props.facilityName}</h1>
	    </div>
	  );
	}
})

export default Searchresult;
