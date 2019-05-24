import React from 'react';
import Layout from './HOC/Layout';
import Home from './components/HOME/Index';
import {Switch, Route} from 'react-router-dom';

const Routes = (props) => {
    return (
        <div>
            <Layout>
              <Switch>
                <Route exact component={Home} path="/"/>
              </Switch>
            </Layout>
        </div>
    );
};

export default Routes;