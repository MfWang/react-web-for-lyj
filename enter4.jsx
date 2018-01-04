// 4.* 版本的route
import React from 'react';
import ReactDom from 'react-dom';

import {
    Route,
    BrowserRouter as Router,
    // Switch,
} from 'react-router-dom'; 

import A from './pages/a/index.jsx';
import B from './pages/b/index.jsx';
import C from './pages/c/index.jsx';
import CDetail from './pages/c/detail.jsx'

class Enter extends React.Component {    
    render() {        
        return (            
            <div>
                <p>你好</p>
                {this.props.children}
            </div>        
        )    
    }
}

ReactDom.render(
    <Router>
        <div>
            <Route path="/" component={Enter} breadcrumbName="首页" ></Route>
            <Route path="/a" breadcrumbName="a" component={A} />
            <Route path="/b" breadcrumbName="b" component={B} />
            <Route path="/home" render={() => <h1>Home</h1>} />
            {/* <Route path="/c" breadcrumbName="C">
                <IndexRoute component={C} breadcrumbName="C" />
                <Route path="/c/detail" breadcrumbName="C详情页" component={CDetail} />
            </Route> */}
        </div>
    </Router>
    ,    
    document.getElementById('content')
);
