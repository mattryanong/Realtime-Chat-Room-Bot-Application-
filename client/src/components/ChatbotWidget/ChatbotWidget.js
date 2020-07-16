import React, { Component } from 'react';
import { Widget } from 'rasa-webchat';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import Join from '../Join/Join';

class ChatbotWidget extends Component {
    state = { showJoinComponent: false}

    render() {
        return (
            <div>
                <Widget
                    initPayload={"Hello!"}
                    socketUrl={"http://localhost:5005"}
                    socketPath={"/socket.io/"}
                    customData={{ "language": "en" }} // arbitrary custom data. Stay minimal as this will be added to the socket
                    title={"Demo Rasa Webchat"}
                    // embedded={true}
                    showFullScreenButton={true}
                    params={{ storage: "session" }}
                    onSocketEvent={{
                        'connect': () => console.log('Connection Established'),
                        'disconnect': () => sessionStorage.clear()
                    }}
                    onWidgetEvent={{
                        'onChatOpen': () => console.log('Chat open'),
                        // 'onChatHidden': () => console.log('Chat hidden'),
                        'onChatClose': () => {
                            console.log('Chat closed');
                            confirmAlert({
                                title: 'Were you satisfied with your service?',
                                buttons: [
                                    {
                                        label: 'Yes'
                                    },
                                    {
                                        label: 'Speak to an agent',
                                        onClick: () => this.setState( { showJoinComponent: true})
                                    }
                                ]
                            });
                        }
                    }}
                />
                <div>
                    {this.state.showJoinComponent ? <Join /> : null}
                </div>
            </div>
        )
    }

}

export default ChatbotWidget