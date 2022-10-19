
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <main >
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: '#cbd3e0',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="#505760"

                            gutterBottom
                        >
                            My Projects
                        </Typography>
                        <Typography variant="h5" align="center" color="#505760"  paragraph>
                            Here are a few of the projects I've worked on since I began developing. You can follow the links to view the GitHub repos or view the live site.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                        </Stack>
                    </Container>
                </Box>
                <Row style={{padding: '50px'}} xs={1} md={2} className="g-4">
                    
                        <Col>
                            <Card style={{backgroundColor: '#cbd3e0', color: '#505760'}}>
                                <Card.Img variant="top" src="triviaRangers.png" />
                                <Card.Body>
                                    <Card.Title>Trivia Rangers</Card.Title>
                                    <Card.Text>
                                        Trivia Rangers is a multiplayer trivia quiz game bult using react and socket.io. It was built as part of a group project.
                                    </Card.Text>
                                    <a target='blank' href="https://triviarangers.netlify.app/">
                                    <button className='btnPrimary'>View live site</button>
                                    </a>
                                    <a target='blank' href="https://github.com/bradneve/Lap-3-Project-Client">
                                    <button className='btnSecondary'>View GitHub repo</button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: '#cbd3e0', color: '#505760'}}>
                                <Card.Img variant="top" src="habitual.png" />
                                <Card.Body>
                                    <Card.Title>Habitual</Card.Title>
                                    <Card.Text>
                                        Habitual was built as part of a group project. It allows you to, upon login, set (and subsequently track) habits you wish to track.
                                    </Card.Text>
                                    <a target='blank' href="https://front-end-habitual.netlify.app/index.html">
                                    <button className='btnPrimary'>View live site</button>
                                    </a>
                                    <a target='blank' href="https://github.com/bradneve/central_repo_habitual">
                                    <button className='btnSecondary'>View GitHub repo</button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: '#cbd3e0', color: '#505760'}}>
                                <Card.Img variant="top" src="wroteIt.png" />
                                <Card.Body>
                                    <Card.Title>wroteIt</Card.Title>
                                    <Card.Text>
                                        wroteIt too was built as part of a group project. It was created as an anonymous blog website.
                                    </Card.Text>
                                    <a target='blank' href="https://resilient-frangipane-39c540.netlify.app/">
                                    <button className='btnPrimary'>View live site</button>
                                    </a>
                                    <a target='blank' href="https://github.com/bradneve/project-1-front-end">
                                    <button className='btnSecondary'>View GitHub repo</button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: '#cbd3e0', color: '#505760'}}>
                                <Card.Img variant="top" src="projectInMaths.png" />
                                <Card.Body>
                                    <Card.Title>The Perron-Frobenius Theorem and the Pagerank Algorithm From a Mathematical Perspective</Card.Title>
                                    <Card.Text>
                                        My final university project.
                                    </Card.Text>
                                    <a target='blank' href="Project_in_Maths.pdf">
                                    <button className='btnPrimary'>View PDF</button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                </Row>
                
            </main>

        </ThemeProvider>
    );
}


