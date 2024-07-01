import { Box, Button, Card, CardContent, Stack, Typography, useTheme } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { formatPrice } from "../utils/formatPrice";

const Transfer = () => {
    const theme = useTheme();
    const [account, setAcoount] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcoount(event.target.value);
    };
    return (
        <>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Недавние переводы
            </Typography>
            <Card>
                <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                    {[10000000, 5000].map((item) => (
                        <ListItem
                            secondaryAction={
                                <Typography sx={{ fontWeight: "unset" }} variant="h6">
                                    {formatPrice(item)}
                                </Typography>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                                    <ArrowOutwardOutlinedIcon
                                        sx={{ transform: "rotate(180deg)" }}
                                    />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Перевод" secondary="29.06.2024" />
                        </ListItem>
                    ))}
                    {[123.125].map((item) => (
                        <ListItem
                            secondaryAction={
                                <Typography sx={{ fontWeight: "unset" }} variant="h6">
                                    - {formatPrice(item)}
                                </Typography>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                                    <ArrowOutwardOutlinedIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Перевод" secondary="29.06.2024" />
                        </ListItem>
                    ))}
                </List>
            </Card>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                    Перевод по номеру счета
                </Typography>
                <Card>
                    <CardContent sx={{ p: 6 }}>
                        <Stack direction="row" spacing={2}>
                            {["1123", "11231223", "123123", "123423"].map((item) => (
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setAcoount(item)}
                                >
                                    <Avatar
                                        sx={{ width: 56, height: 56 }}
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/1.jpg"
                                    />
                                    <Typography
                                        sx={{ mt: 1, textAlign: "center" }}
                                        component="div"
                                        variant="body2"
                                    >
                                        Пользователь
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                        <TextField
                            sx={{ mt: 4 }}
                            fullWidth
                            label="Счет получателя"
                            variant="outlined"
                            value={account}
                            onChange={handleChange}
                        />
                        <TextField sx={{ mt: 4 }} fullWidth label="Сумма" variant="outlined" />
                        <Button sx={{ mt: 4 }} variant="outlined">
                            Отправить
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};

export default Transfer;
