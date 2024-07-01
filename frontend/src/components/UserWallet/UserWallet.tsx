import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const UserWallet = () => {
    return (
        <>
            <Accordion
                square={true}
                sx={{
                    "&:before": {
                        display: "none",
                    },
                    px: 4,
                    py: 2,
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography component="div" variant="h6">
                        Карты
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                        {[1, 2, 3].map((value) => (
                            <ListItem
                                key={value}
                                disableGutters
                                secondaryAction={
                                    <Avatar>
                                        <AccountBalanceWalletOutlinedIcon />
                                    </Avatar>
                                }
                            >
                                <ListItemText primary={`•• 6112 `} />
                            </ListItem>
                        ))}
                    </List>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default UserWallet;
