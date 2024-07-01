/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme: any) {
	return {
		primary: {
			main: theme.colors?.primaryMain,
		},
	};
}
