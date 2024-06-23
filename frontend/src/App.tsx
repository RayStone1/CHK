import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
    const theme = createTheme({});
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
    );
}

export default App;
