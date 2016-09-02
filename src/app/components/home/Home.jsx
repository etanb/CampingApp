import thunkMiddleware from 'redux-thunk'
import Searchbar from '../searchbar/Searchbar.jsx'
import Searchresultlist from '../searchresultlist/Searchresultlist.jsx'
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import * as actions from '../../actions';

var Home = React.createClass({
	getInitialState: function() {
	    return {
	    	searchResults: [],
	    	noResultsString: "Please use the search bar above to find campgrounds!"
	    }
	},

	handleInputAreaChange: function(text) {
		var reqType = {
				method:"GET"
			},
			recreationApiKey = process.env.RECREATION_KEY,
			componentContext = this;
//API call to the Recreation Information Database facilities list. Limit results to six. 
		fetch("https://ridb.recreation.gov/api/v1/facilities?&limit=6&query=" + text + "&apikey=" + recreationApiKey, reqType).then(function(response) {
			return response.json()
		}).then(function(data) {
			var resultArray = data.RECDATA;

			if(resultArray.length) {
				return resultArray
			} else {
				componentContext.setState({
					searchResults: [],
					noResultsString: "Sorry, your search returned no results. Please try again."
				})
			}
		}).then(function(resultArray) {
			var totalResults = resultArray.length,
				completedRequests = 0;

			resultArray.forEach( function(facilityResult) {
				var currentResult = facilityResult;
				
				fetch("https://ridb.recreation.gov/api/v1/facilities/" + facilityResult.FacilityID + "/media?" + "&apikey=" + recreationApiKey, reqType).then(function(facility){
					
					return facility.json()
				}).then(function(facilityResponse){
					currentResult["FacilityImages"] = facilityResponse.RECDATA
					completedRequests++

					return resultArray
				}).then(function(updatedArray){
					if(completedRequests === totalResults) {
						componentContext.setState({searchResults: updatedArray})
					}
				})
			})
		})
	},

	render: function() {
		return (
	    <div>
	      <Searchbar handleInputAreaChange={this.handleInputAreaChange} />
	      <Searchresultlist searchResults={this.state.searchResults} noResultsString={this.state.noResultsString}/>
	    </div>
	  );
	}
})

export default Home;
