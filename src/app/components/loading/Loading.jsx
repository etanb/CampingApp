import React from 'react';

var Loading = React.createClass({
	render: function() {
	  return (
		<div className="loading-container">
		  <div className="indicator indicator-one"></div>
		  <div className="indicator indicator-two"></div>
		  <div className="indicator indicator-three"></div>
		  <div className="indicator indicator-four"></div>
		  <div className="indicator indicator-five"></div>
		</div>
	    
	  );
	}
})

export default Loading;
