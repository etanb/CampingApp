import React, { PropTypes } from 'react';
import Header from './common/Header';
import Home from './home/Home'
import About from './about/About'

var App = React.createClass({

	render: function() {
		return (
	    <div className="container">
	      <Header />
	      <Home />
	    </div>
	  );
	}
})

App.propTypes = { children: PropTypes.object,
				  posts: PropTypes.array };

export default App;
