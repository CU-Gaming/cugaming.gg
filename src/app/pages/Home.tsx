import {Card, CardContent, CardHeader, CardMedia, Grid, Typography, useTheme} from "@mui/material";
import {ContainerGrid} from "../components/layout/ContainerGrid";
import PlayerAvatar from "../assets/player.jpg"

const sections = [
    {
        title: "Community",
        description: `The community, Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quisquam.`,
        image: "https://media.discordapp.net/attachments/690989503397101678/980977476958306394/unknown.png"
    },
    {
        title: "Events",
        description: `The events, Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quisquam.`,
        image: PlayerAvatar
    },
    {
        title: "Esports",
        description: `The esports, Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quisquam.`,
        image: PlayerAvatar
    },
]

export function Home() {
    const theme = useTheme()

    return (
        <ContainerGrid maxWidth={'lg'}>
            <Grid item xs={12}>
<<<<<<< HEAD
                <Typography variant={'h2'}>Home</Typography>
=======
                <Typography variant={'h3'}>Home</Typography>
>>>>>>> react-staging
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, quisquam.
                </Typography>
            </Grid>

            {
                sections.map(
                    section =>
                        <Grid item lg={4} sm={12} md={6}>
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
                                    <img src={section.image} style={{
                                        width: '100%',
                                        maxHeight: 'auto',
                                        objectFit: 'cover',
                                        marginLeft: '50%',
                                        transform: 'translateX(-50%)',
                                    }}/>
                                </CardMedia>
                                <CardHeader
                                    sx={{
                                        padding: 1,
                                        height: 50
                                    }}
                                    title={section.title}
                                />
                                <CardContent sx={{
                                    padding: 1,
                                    height: 75
                                }}>
                                    {section.description}
                                </CardContent>
                            </Card>
                        </Grid>
                )
            }
        </ContainerGrid>
    )
}