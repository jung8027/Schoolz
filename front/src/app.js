import {withRouter, Router, Route, Link, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import SchoolList from './SchoolList';
import SchoolInfo from './SchoolInfo';

ReactDOM.render(  
	<Router history={browserHistory}>
    <Route path='/' component={SchoolList} />
    <Route path='/school/:schoolId' component={SchoolInfo} />
  </Router>, 
  document.getElementById('root')
)