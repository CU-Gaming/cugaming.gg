import {createTheme} from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#CFB87C',
        },
        secondary: {
            main: '#0277BD',
        },
        text: {
            primary: '#fff',
            secondary: '#000',
        },
        background: {
            default: '#FFFFFF',
            paper: '#565A5C',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});