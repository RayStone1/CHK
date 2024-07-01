import {RouterProvider} from 'react-router-dom';
import router from './routes';
import {ThemeProvider} from '@mui/material';
import themes from './themes';

function App() {
	return (
		<ThemeProvider theme={themes}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
