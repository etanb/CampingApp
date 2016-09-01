import React from 'react';

var Searchbar = React.createClass({
	handleUserInput(event) {
		event.preventDefault();
		var userInput = document.getElementsByClassName('campgroundInput')[0].value;
		this.props.handleInputAreaChange(userInput);
	},

	render: function() {
	  return (
	    <div className="container searchbar">
		    <form onSubmit={this.handleUserInput} className="commentForm">
		    	<input className="campgroundInput" type="text" />
		    	<button type="button" onClick={this.handleUserInput}>Submit</button>
		    </form>
	    </div>
	  );
	}
})

export default Searchbar;
