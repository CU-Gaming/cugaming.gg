import {NavBar, Sidebar} from "../nav/Sidebar";
import {Box, Theme, useTheme} from "@mui/material";
import React from "react";

export function Root(props: { children: React.ReactNode }) {
    const theme: Theme = useTheme()
    // const [drawerOpen,] = useDrawerOpen()

    return (
        <Box id={'rootarea'} sx={{
            display: 'flex',
            background: theme.palette.background.default,
            backgroundSize: 'cover',
        }}>
            <NavBar/>
            <Sidebar/>
            {props.children}
        </Box>
    )
}