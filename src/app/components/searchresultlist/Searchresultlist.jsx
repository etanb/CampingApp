import React from 'react'
import Searchresult from '../searchresult/Searchresult.jsx'
import Emptyresult from '../emptyresult/Emptyresult.jsx'
import Loading from '../loading/Loading.jsx'

var Searchresultlist = React.createClass({
	render: function() {
		var resultDisplay;
		if (this.props.isLoading) {
			resultDisplay = <Loading />
		} else if (this.props.searchResults && this.props.searchResults.length) {
			resultDisplay = this.props.searchResults.map( function(result, index) {
				var mainFacilityImg = result.FacilityImages.length ? result.FacilityImages[0].URL : "https://ridb.recreation.gov/assets/img/partners/blm.png";
				return <Searchresult key={index} facilityName={result.FacilityName} mainFacilityImg={mainFacilityImg}/>
			})
		} else {
			resultDisplay = <Emptyresult noResultsString={this.props.noResultsString} />
		}

	  return (
	    <div className="responses">
	    	{ resultDisplay }
	    </div>
	  );
	}
})

export default Searchresultlist;
