import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ChatbotWidget from './components/ChatbotWidget/ChatbotWidget'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles({
    primaryBg: {
        background:
            "linear-gradient(180deg, #325380 10.77%, #0A1D37 99.98%, #0A1D37 100%)"
    }
});

const App = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (

        <Router>
            <div>
                <ChatbotWidget />
                <Switch>
                    <Route path="/join" component={Join} />
                    <Route path="/chat" component={Chat} />
                </Switch>
            </div>
        </Router>

    );
}

export default App;