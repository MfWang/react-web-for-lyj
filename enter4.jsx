// 4.* 版本的route
import React from 'react';
import ReactDom from 'react-dom';

import {
    Route,
    BrowserRouter as Router,
} from 'react-router-dom'; 

import A from './pages/a/index.jsx';
import B from './pages/b/index.jsx';
import C from './pages/c/index.jsx';
import CDetail from './pages/c/detail.jsx'

class Enter extends React.Component {    
    render() {        
        return (            
            <div><p>你好</p></div>        
        )    
    }
}

ReactDom.render(
    <Router>
        <div>
            <Route exact path="/" component={Enter} breadcrumbName="首页" />
            <Route path="/a" breadcrumbName="a" component={A} />
            <Route path="/b" breadcrumbName="b" component={B} />
        </div>
    </Router>
    ,    
    document.getElementById('content')
);