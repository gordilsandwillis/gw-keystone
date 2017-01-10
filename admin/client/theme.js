/* eslint-disable key-spacing */
const theme = {};
const { blend, darken, fade, lighten } = require('./utils/color');

// ==============================
// COMMON
// ==============================

// breakpoint

theme.breakpointNumeric = {
	mobile:           480,
	tabletPortrait:   768,
	tabletLandscape:  992,
	desktop:          1200,
};
theme.breakpoint = {
	tabletPortraitMin:  (theme.breakpointNumeric.mobile + 1) + 'px',
	tabletLandscapeMin: (theme.breakpointNumeric.tabletPortrait + 1) + 'px',
	desktopMin:         (theme.breakpointNumeric.tabletLandscape + 1) + 'px',
	desktopLargeMin:    (theme.breakpointNumeric.desktop + 1) + 'px',

	mobileMax:           theme.breakpointNumeric.mobile + 'px',
	tabletPortraitMax:   theme.breakpointNumeric.tabletPortrait + 'px',
	tabletLandscapeMax:  theme.breakpointNumeric.tabletLandscape + 'px',
	desktopMax:          theme.breakpointNumeric.desktop + 'px',
};

// container

theme.container = {
	gutter: 50,
	size: {
		small:  750,
		medium: 970,
		large: 1170,
	},
};

// color

theme.color = {
	body:                '#fff',
	link:                '#26E38A',
	linkHover:           lighten('#26E38A', 10),
	text:                '#4E5E68',

	// contextual
	success:             '#26E38A', //'#34c240',
	create:              '#26E38A', // alias for success
	primary:             '#26E38A',
	info:                '#26E38A', // alias for primary
	warning:             '#FA3',
	danger:              '#d64242',
	error:               '#d64242', // alias for danger

	// neutrals
	gray90:              lighten('#4E5E68', 10),
	gray80:              lighten('#4E5E68', 20),
	gray70:              lighten('#4E5E68', 30),
	gray60:              lighten('#4E5E68', 40),
	gray50:              lighten('#4E5E68', 50),
	gray40:              lighten('#4E5E68', 60),
	gray30:              lighten('#4E5E68', 70),
	gray20:              lighten('#4E5E68', 80),
	gray15:              lighten('#4E5E68', 85),
	gray10:              lighten('#4E5E68', 90),
	gray05:              lighten('#4E5E68', 95),

	// social
	facebook:            '#3B5998',
	google:              '#DC4E41',
	instagram:           '#3f729b',
	pinterest:           '#bd081c',
	tumblr:              '#35465c',
	twitter:             '#55ACEE',
	youtube:             '#cd201f',
	vimeo:               '#1ab7ea',
};

// border radii

theme.borderRadius = {
	// small: '0.125rem',
	// default: '0.3rem',
	// large: '0.5rem',
	small: '3px',
	default: '3px',
	large: '3px',
};

// spacing

theme.spacing = {
	xsmall:      5,
	small:       10,
	default:     20,
	large:       30,
	xlarge:      40,
	xxlarge:     60,
};

// ==============================
// ELEMENTAL SPECIFIC
// ==============================

// button

theme.button = {
	borderRadius: theme.borderRadius.default,
	borderWidth: 1,
	font: {
		weight: 400,
	},
	paddingHorizontal: '1.5em',
	default: {
		bgColor: theme.color.text,
		borderColor: theme.color.text,
		textColor: 'white',
	},
	primary: {
		bgColor: theme.color.text,
		borderColor: theme.color.text,
		textColor: 'white',
	},
	success: {
		bgColor: theme.color.success,
		borderColor: theme.color.success,
		textColor: 'white',
	},
	warning: {
		bgColor: theme.color.warning,
		borderColor: theme.color.warning,
		textColor: 'white',
	},
	danger: {
		bgColor: theme.color.danger,
		borderColor: theme.color.danger,
		textColor: 'white',
	},
};

// blank state

theme.blankstate = {
	background: darken(theme.color.body, 2),
	borderRadius: '10px',
	color: lighten(theme.color.text, 16),
	paddingHorizontal: '2em',
	paddingTop: '6em',
	paddingBottom: '6.5em',
	border: `2px dashed ${darken(theme.color.body, 8)}`,
};

// font

theme.font = {
	family: {
		mono: 'Menlo, Monaco, Consolas, "Courier New", monospace',
		sansSerif: '"Lato", "Helvetica Neue", Helvetica, Arial, sans-serif',
		serif: 'Georgia, Times New Roman, Times, serif',
	},
	size: {
		xxsmall: '0.65rem',
		xsmall: '0.75rem',
		small: '0.85rem',
		default: '1rem',
		medium: '1.2rem',
		large: '1.6rem',
		xlarge: '2.4rem',
		xxlarge: '3.2rem',
	},
};

// form

theme.form = {
	label: {
		color: theme.color.text,
		fontSize: '1rem',
		fontWeight: 'normal',
		width: '33.333%',
	},
	note: {
		color: theme.color.gray40,
		fontSize: '0.9em',
	},
};

// component

theme.component = {
	// lineHeight: '2.8em',
	// height: '2.9em',
	// padding: '1.25em',

	lineHeight: '38px',
	height: '40px',
	padding: '25px',
};

// input

theme.input = {
	background: {
		default: 'transparent',
		focus: theme.color.body,
		hover: theme.color.body,
		disabled: theme.color.gray20,
		noedit: theme.color.gray20,
	},
	placeholderColor: theme.color.gray50,
	lineHeight: theme.component.lineHeight,
	height: theme.component.height,
	border: {
		color: {
			default: theme.color.gray20,
			focus: theme.color.primary,
			hover: theme.color.gray40,
			noedit: theme.color.gray20,
		},
		radius: theme.borderRadius.default,
		width: 1,
	},
	boxShadow: 'none',
	boxShadowFocus: 'none',
	paddingHorizontal: '.75em',
};

// select

theme.select = {
	boxShadow: 'none',
	background: theme.color.gray20,
};

// alert

theme.alert = {
	padding: '.75em  1em .9em',
	lineHeight: '1.4em',
	margin: 0,
	borderWidth: 0,
	borderRadius: theme.borderRadius.default,

	color: {
		danger: {
			background: theme.color.danger,
			border: theme.color.danger,
			text: theme.color.body,
		},
		info: {
			background: theme.color.primary,
			border: theme.color.primary,
			text: theme.color.body,
		},
		success: {
			background: theme.color.success,
			border: theme.color.success,
			text: theme.color.body,
		},
		warning: {
			background: theme.color.warning,
			border: theme.color.warning,
			text: theme.color.body,
		},
	},
};

// glyph

theme.glyph = {
	color: {
		danger: theme.color.danger,
		inherit: 'inherit',
		inverted: 'white',
		primary: theme.color.primary,
		success: theme.color.success,
		warning: theme.color.warning,
	},
	size: {
		small: 16,
		medium: 32,
		large: 64,
	},
};

// modal

theme.modal = {
	background: fade(theme.color.text, 15),
	zIndex: 100,
	padding: {
		dialog: {
			horizontal: 0,
			vertical: 0,
		},
		body: {
			horizontal: '30px',
			vertical: '30px',
		},
		footer: {
			horizontal: '30px',
			vertical: '30px',
		},
		header: {
			horizontal: '30px',
			vertical: '10px',
		},
	},
};

// pagination

theme.pagination = {
	color: theme.color.gray60,

	hover: {
		background: 'white',
		border: 'rgba(0, 0, 0, 0.1)',
		color: theme.color.gray60,
	},
	selected: {
		background: 'rgba(0, 0, 0, 0.05)',
		border: 'transparent',
		color: theme.color.gray60,
	},
	disabled: {
		background: 'transparent',
		color: theme.color.gray40,
	},
};

// spinner

theme.spinner = {
	color: {
		danger: theme.color.danger,
		default: theme.color.gray40,
		inverted: 'white',
		primary: theme.color.primary,
		success: theme.color.success,
		warning: theme.color.warning,
	},
	size: {
		small:	4,
		medium:	8,
		large:	16,
	},
};

module.exports = theme;
