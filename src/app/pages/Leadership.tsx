import {Grid, Typography} from "@mui/material";
import {ContainerGrid} from "../components/layout/ContainerGrid";

export function Leadership() {
    return (
        <ContainerGrid maxWidth={'lg'}>
            <Grid item xs={12}>
                <Typography variant={'h2'}>Leadership</Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, quisquam.
                </Typography>
            </Grid>
        </ContainerGrid>
    )
}