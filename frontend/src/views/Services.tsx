import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

const Services = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // navigate("/lk/transfer");
    }, [navigate]);
    return (
        <>
            <Box className="services" sx={{ mb: 16 }} component="section">
                <Typography variant="h5" sx={{ mb: 6 }}>
                    Услуги
                </Typography>
                <Grid container spacing={8}>
                    <Grid item xs={3}>
                        <Card sx={{ mb: 4 }} onClick={() => navigate("transfer")}>
                            <CardContent sx={{ p: 8 }}>
                                <CompareArrowsOutlinedIcon sx={{ fontSize: 52 }} />
                                <Typography variant="body1" component="div">
                                    Перевод средств
                                </Typography>
                            </CardContent>
                            <Box />
                        </Card>
                    </Grid>
                    {[1, 2].map((item) => (
                        <Grid item xs={3} key={item}>
                            <Card sx={{ mb: 4 }}>
                                <CardContent sx={{ p: 8 }}>
                                    <PriceCheckOutlinedIcon sx={{ fontSize: 52 }} />
                                    <Typography variant="body1" component="div">
                                        Услуга {item}
                                    </Typography>
                                </CardContent>
                                <Box />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box className="services" component="section">
                <Typography variant="h5" sx={{ mb: 6 }}>
                    Услуги 2
                </Typography>
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <Card sx={{ mb: 4 }}>
                            <CardContent sx={{ p: 8 }}>
                                <Typography sx={{ mb: 4 }} variant="body1" component="div">
                                    Всего потрачено
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {formatPrice(23139123.45)}
                                </Typography>
                            </CardContent>
                            <Box />
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ mb: 4 }}>
                            <CardContent sx={{ p: 8 }}>
                                <Typography sx={{ mb: 4 }} variant="body1" component="div">
                                    Всего потрачено
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {formatPrice(23139123.45)}
                                </Typography>
                            </CardContent>
                            <Box />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box className="services" component="section">
                <Typography variant="h5" sx={{ mb: 6 }}>
                    Услуги
                </Typography>
                <Grid container spacing={8}>
                    {[1, 2, 3].map((item) => (
                        <Grid item xs={3} key={item}>
                            <Card sx={{ mb: 4 }}>
                                <CardContent sx={{ p: 8 }}>
                                    <PriceCheckOutlinedIcon sx={{ fontSize: 52 }} />
                                    <Typography variant="body1" component="div">
                                        Услуга {item}
                                    </Typography>
                                </CardContent>
                                <Box />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default Services;
