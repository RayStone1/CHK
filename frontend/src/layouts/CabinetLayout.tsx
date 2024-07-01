import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import UserWallet from "../components/UserWallet/UserWallet";
import { Outlet } from "react-router-dom";

const validPhone = (num: String) => {
    return num.replace(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, "+$1 ($2) $3 $4 $5");
};

const CabinetLayout = () => {
    return (
        <>
            <Grid container spacing={13} sx={{ mt: 1 }}>
                <Grid item xs={3}>
                    <Card sx={{ mb: 4 }}>
                        <CardContent sx={{ p: 6 }}>
                            <Typography variant="h6" component="div">
                                Мой телефон
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                {validPhone("79995678901")}
                            </Typography>
                        </CardContent>
                    </Card>
                    <UserWallet />
                    <Button variant="contained" size="large" sx={{ mt: 4 }} fullWidth>
                        Открыть новый счет
                    </Button>
                </Grid>
                <Grid item xs={9}>
                    <Outlet />
                </Grid>
            </Grid>
        </>
    );
};

export default CabinetLayout;
