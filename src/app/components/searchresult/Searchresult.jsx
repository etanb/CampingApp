import React from 'react';

var Searchresult = React.createClass({
	render: function() {
	  return (
	    <div className="search-result">
	    	<img src={this.props.mainFacilityImg} />
	    	<h1>{this.props.facilityName}</h1>
	    </div>
	  );
	}
})

export default Searchresult;
