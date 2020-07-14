import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import ChatbotWidget from './components/ChatbotWidget/ChatbotWidget'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

const App = () => (
    <div>
        <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
        </Router>

        <ChatbotWidget />
    </div>
);

export default App;