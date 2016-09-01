import thunkMiddleware from 'redux-thunk'
import Searchbar from '../searchbar/Searchbar.jsx'
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import * as actions from '../../actions';

var Home = React.createClass({
	handleInputAreaChange: function(text) {
		var reqType = {
			method:"GET"
		};

		fetch("https://ridb.recreation.gov/api/v1/facilities?&query=" + text + "&apikey=0FEEA340A2F4484A927E0DE201A97F80", reqType).then((response) => {
			return response.json()
		}).then((data) => {
			debugger;
		}).then((parsedData) => {
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
