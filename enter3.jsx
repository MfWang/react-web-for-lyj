// 3.* 版本的route
import React from 'react';
import ReactDom from 'react-dom';

import {Router, Route, hashHistory, Link, IndexRoute} from 'react-router';
// import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'; 

import A from './pages/a/index.jsx';
import B from './pages/b/index.jsx';
import C from './pages/c/index.jsx';
import CDetail from './pages/c/detail.jsx'

class Enter extends React.Component {    
    render() {        
        return (            
            <div>
                <p>这里，使用第一种router不会显示</p>
                <p>使用第二种router会显示</p>
                {this.props.children}
            </div>        
        )    
    }
}

ReactDom.render(
    // <Router history={hashHistory}>
    //     <Route path="/" component={Enter} breadcrumbName="首页" ></Route>
    //     <Route path="/a" breadcrumbName="a" component={A} />
    //     <Route path="/b" breadcrumbName="b" component={B} />
    //     <Route path="/c" breadcrumbName="主页">
    //         <IndexRoute component={C} breadcrumbName="C" />
    //         <Route path="/c/detail" breadcrumbName="C详情页" component={CDetail} />
    //     </Route>
    //     <Route exact path="/cdetail/" breadcrumbName="a" component={CDetail} />
    //     {/* exact 要求路由严格匹配 */}
    // </Router>
    <Router history={hashHistory}>
        <Route path="/" component={Enter} breadcrumbName="首页" >
            <Route path="/a" breadcrumbName="a" component={A} />
            <Route path="/b" breadcrumbName="b" component={B} />
            <Route path="/c" breadcrumbName="C">
                <IndexRoute component={C} breadcrumbName="C" />
                <Route path="/c/detail" breadcrumbName="C详情页" component={CDetail} />
            </Route>
        </Route>
    </Router>
    ,    
    document.getElementById('content')
);