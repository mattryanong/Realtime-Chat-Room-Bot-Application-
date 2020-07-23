import React, { Component } from 'react';
import { Widget } from 'rasa-webchat';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useHistory } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';


function ChatbotWidget() {

    const history = useHistory();

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
                            customUI: ({ onClose }) => {
                                return (
                                    <div className='custom-ui'>
                                        <Typography variant="h3">Were you satisfied with your service?</Typography>
                                        <Button onClick={onClose}>Yes</Button>
                                        <Button onClick={() => {
                                            history.push("/join");
                                            onClose();
                                        }}
                                        >Speak to an agent</Button>
                                    </div>
                                )
                            }
                            // title: 'Were you satisfied with your service?',
                            // buttons: [
                            //     {
                            //         label: 'Yes'
                            //     },
                            //     {
                            //         label: 'Speak to an agent',
                            //         onClick: () => {
                            //             return(<Link to={`/join`}></Link>)
                            //         }
                            //     }
                            // ]
                        });
                    }
                }}
            />
        </div>
    )
}

export default ChatbotWidget