import React from 'react';
import {Router} from 'dva/router';

//引入封装的路由表
import routes from './router.config.js'
import RouterView from './RouterView';
function RouterConfig({history}){
    return (
        <Router history={history}>
            <RouterView routes={routes.routes} />
        </Router>
    );
}
export default RouterConfig;