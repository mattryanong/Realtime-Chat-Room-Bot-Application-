import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ChatbotWidget from './components/ChatbotWidget/ChatbotWidget'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import { useTheme } from '@material-ui/core';

const App = () => {
    const theme = useTheme();
    console.log(theme);
    return (
        <Router>
            <ChatbotWidget />
            <Switch>
                <Route path="/join" component={Join} />
                <Route path="/chat" component={Chat} />
            </Switch>

        </Router>
    );
}

export default App;