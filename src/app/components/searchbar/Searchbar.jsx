import React from 'react';

var Searchbar = React.createClass({
	handleUserInput(event) {
		event.preventDefault();
		var userInput = document.getElementsByClassName('campground-input')[0].value;
		this.props.handleInputAreaChange(userInput);
	},

	render: function() {
	  return (
		<form className="form-inline" onSubmit={this.handleUserInput}>
		    <div className="form-group">
		    	<input className="campground-input" type="text" placeholder="Search nature here..." />
		    </div>
		    <button type="submit" className="btn btn-primary search-button" onClick={this.handleUserInput}><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
		</form>
	    
	  );
	}
})

export default Searchbar;
