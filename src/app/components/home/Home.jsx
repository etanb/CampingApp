import thunkMiddleware from 'redux-thunk'
import Searchbar from '../searchbar/Searchbar.jsx'
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import * as actions from '../../actions';

var Home = React.createClass({
	handleInputAreaChange: function(text) {
		var reqType = {
				method:"GET"
			},
			recreationApiKey = process.env.RECREATION_KEY;

		fetch("https://ridb.recreation.gov/api/v1/facilities?&query=" + text + "&apikey=" + recreationApiKey, reqType).then((response) => {
			return response.json()
		}).then(function(data) {
			debugger;
		})
	},

	render: function() {
		return (
	    <div>
	      <Searchbar handleInputAreaChange={this.handleInputAreaChange} />
	    </div>
	  );
	}
})

export default Home;
