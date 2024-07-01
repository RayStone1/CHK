export default function componentStyleOverrides(theme) {
	return {
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 16,
					boxShadow: 'none',
					'&:last-child': {
						paddingBottom: 0,
					},
				},
			},
		},

		MuiCardContent: {
			styleOverrides: {
				root: {
					'&:last-child': {
						paddingBottom: 'none', // Убираем padding bottom для последнего дочернего элемента
					},
				},
			},
		},
		MuiAccordionSummary: {
			styleOverrides: {
				root: {
					margin: 0,
					'&.Mui-expanded': {
						margin: 0,
					},
				},
				content: {
					margin: 0,
					'&.Mui-expanded': {
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
					boxShadow: 'none',
				},
			},
		},
	};
}
