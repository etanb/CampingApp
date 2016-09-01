import React from 'react'
import Searchresult from '../searchresult/Searchresult.jsx'
import Emptyresult from '../emptyresult/Emptyresult.jsx'

var Searchresultlist = React.createClass({
	render: function() {
		var resultDisplay;

		if(this.props.searchResults.length) {
			resultDisplay = this.props.searchResults.map( function(result, index) {
				return <Searchresult key={index} facilityName={result.FacilityName} />
			})
		} else {
			resultDisplay = <Emptyresult noResultsString={this.props.noResultsString} />
		}

	  return (
	    <div className="result-container">
	    	{ resultDisplay }
	    </div>
	  );
	}
})

export default Searchresultlist;
