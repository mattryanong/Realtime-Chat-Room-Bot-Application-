import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ChatbotWidget from './components/ChatbotWidget/ChatbotWidget'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

const App = () => (
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

export default App;