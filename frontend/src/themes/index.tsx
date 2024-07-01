import {createTheme} from '@mui/material/styles';
import colors from 'assets/scss/_themes-vars.module.scss';

import themePalette from './palette';
import themeTypography from './typography';
import componentStyleOverrides from './compStyleOverride';

export const theme = () => {
	const color = {
		primaryMain: '#3272c0',
	};

	const themeOption = {
		colors: color,
	};
	const themeOptions = {
		spacing: 8,
		palette: themePalette(themeOption),
		typography: themeTypography(themeOption),
	};
	const themes = createTheme(themeOptions);
	themes.components = componentStyleOverrides(themeOption);

	return themes;
};

export default theme;
