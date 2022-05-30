import {Avatar, Card, CardHeader, CardMedia, Grid, Paper, Typography, useTheme} from "@mui/material";
import {ContainerGrid} from "../components/layout/ContainerGrid";
import PlayerAvatar from "../assets/player.jpg"

export const teams = [
    {
        name: "Valorant Black",
        game: "Valorant",
        game_icon: "https://preview.redd.it/buzyn25jzr761.png?width=1000&format=png&auto=webp&s=c8a55973b52a27e003269914ed1a883849ce4bdc",
        members: [
            {
                name: "Dwayne \"The Rock\" Johnson",
                image: PlayerAvatar
            },
            {
                name: "Dwayne \"The Rock\" Johnson",
                image: PlayerAvatar
            },
            {
                name: "Dwayne \"The Rock\" Johnson",
                image: PlayerAvatar
            },
            {
                name: "Dwayne \"The Rock\" Johnson",
                image: PlayerAvatar
            },
        ]
    },
    {
        name: "Overwatch Gold",
        game: "Overwatch",
        game_icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/1024px-Overwatch_circle_logo.svg.png",
        members: [
            {
                name: "Dwayne \"The Rock\" Johnson",
                image: PlayerAvatar
            },
            {
                name: "Dwayne \"The Rock\" Johnson",
                image: PlayerAvatar
            },
            {
                name: "Dwayne \"The Rock\" Johnson",
                image: PlayerAvatar
            },
            {
                name: "Dwayne \"The Rock\" Johnson",
                image: PlayerAvatar
            },
        ]
    },
]


export function Teams() {
    const theme = useTheme()

    return (
        <ContainerGrid maxWidth={'md'}>
            <Grid item xs={12}>
                <Typography variant={'h3'} sx={{marginBottom: 4}}>Teams</Typography>
            </Grid>

            {
                teams.map(team =>
                    <Grid item xs={12}>
                        <Paper sx={{padding: 2}}>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <Typography variant={'h3'} sx={{fontWeight: 600}}>
                                        {team.name}
                                    </Typography>
                                    {/*<Typography variant={'h5'} color={'text.secondary'}>*/}
                                    {/*    {team.game}*/}
                                    {/*</Typography>*/}
                                </Grid>
                                <Grid item xs={4} sx={{display: 'flex', justifyContent: 'right'}}>
                                    <Avatar
                                        src={team.game_icon}
                                        alt={team.game}
                                        sx={{
                                            width: 96, height: 96,
                                            backgroundColor: 'black',
                                            padding: 1
                                        }}
                                        variant={'rounded'}
                                    />
                                </Grid>
                                {
                                    team.members.map(
                                        member =>
                                            <Grid item lg={3} md={4} sm={6}>
                                                <Card
                                                    // variant={'outlined'}
                                                    sx={{
                                                        background: theme.palette.primary.main,
                                                        transition: '.5s',
                                                        '&:hover': {
                                                            marginTop: -1.5
                                                        }
                                                    }}
                                                >
                                                    <CardMedia sx={{height: 250, overflow: "hidden"}}>
                                                        <img src={member.image} style={{
                                                            width: 'auto',
                                                            maxHeight: '125%',
                                                            marginLeft: '50%',
                                                            transform: ' translateX(-50%)'
                                                        }}/>
                                                    </CardMedia>
                                                    <CardHeader
                                                        sx={{
                                                            padding: 1,
                                                            height: 75
                                                        }}
                                                        title={member.name}
                                                    />
                                                </Card>
                                            </Grid>
                                    )
                                }
                            </Grid>
                        </Paper>
                    </Grid>
                )
            }
        </ContainerGrid>
    )
}