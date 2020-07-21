import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './App'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#33547F",
        },
        secondary: {
            main: "#39B8BA",
        },
        background: {
            default: "F3F6FA",
            paper: "FFFFFF"
        },
        neutralDark: {
            main: "393939"
        },
        neutralGrey: {
            main: "#818181"
        },
        neutralLight: {
            main: "#EEEEEF"
        }
    },
    typography: {
        fontFamily: 'Monstserrat'
    }
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    , document.querySelector('#root')
);

