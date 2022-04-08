import React from "react"
import {Container, ContainerProps, Grid, Theme} from "@mui/material";
import {useTheme} from "@mui/material";

export function ContainerGrid(props: ContainerProps): JSX.Element {
    const theme: Theme = useTheme()

    return (
        <main style={{
            flexGrow: 1,
            overflow: 'auto',
            height: '100vh',
        }}>
            {/*<Box sx={{*/}
            {/*    ...theme.mixins.toolbar,*/}
            {/*    position: 'relative',*/}
            {/*    width: (sidebarOpen ? sidebarDrawerWidth : 1),*/}
            {/*}}/>*/}
            <Container
                {...props}
                sx={{
                    paddingTop: theme.spacing(10),
                    paddingBottom: theme.spacing(4),
                    width: '100%',
                    ...props.sx
                }}
            >
                <Grid container spacing={4} justifyContent={'center'}>
                    {props.children}
                </Grid>
            </Container>
        </main>
    )
}