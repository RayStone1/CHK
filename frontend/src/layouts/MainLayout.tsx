import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Outlet, useNavigate } from "react-router-dom";
import { Container, ThemeProvider, createTheme } from "@mui/material";

const MainLayout = () => {
    const navigate = useNavigate();
    const theme = createTheme({
        palette: {
            primary: {
                main: "#0052cc",
            },
            secondary: {
                main: "#edf2ff",
            },
        },
        spacing: 4,
        typography: {
            h5: {
                fontWeight: "bold",
            },
            h6: {
                fontWeight: "bold",
            },
        },
        components: {
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 16,
                        boxShadow: "none",
                        "&:last-child": {
                            paddingBottom: 0,
                        },
                    },
                },
            },

            MuiCardContent: {
                styleOverrides: {
                    root: {
                        "&:last-child": {
                            paddingBottom: "none", // Убираем padding bottom для последнего дочернего элемента
                        },
                    },
                },
            },
            MuiAccordionSummary: {
                styleOverrides: {
                    root: {
                        margin: 0,
                        "&.Mui-expanded": {
                            margin: 0,
                        },
                    },
                    content: {
                        margin: 0,
                        "&.Mui-expanded": {
                            margin: 0,
                        },
                    },
                },
            },
            MuiAccordionDetails: {
                styleOverrides: {
                    root: {
                        borderRadius: 16,
                    },
                },
            },
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        borderRadius: 16,
                        boxShadow: "none",
                    },
                },
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    bgcolor: "#f2f3f7",
                }}
            >
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" onClick={() => navigate("/")}>
                            Header
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box component="main" sx={{ flex: 1, py: 3 }}>
                    <Container maxWidth="xl">
                        <Outlet />
                    </Container>
                </Box>
                <Box
                    component="footer"
                    sx={{ py: 3, textAlign: "center", bgcolor: "background.paper" }}
                >
                    <Container>
                        <Typography variant="body1">Footer</Typography>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default MainLayout;
