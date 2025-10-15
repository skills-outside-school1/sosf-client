/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{html,js}", // Include public folder if necessary
  ],
  theme: {
  	screens: {
  		sm: {
  			max: '768px'
  		},
  		md: '768px',
  		lg: '976px',
  		xl: '1440px'
  	},
  	extend: {
  		listStyleType: {
  			dash: '-'
  		},
  		fontFamily: {
  			lato: [
  				'Lato',
  				'sans-serif'
  			],
  			mont: [
  				'Montserrat',
  				'sans-serif'
  			],
  			inter: [
  				'Inter',
  				'sans-serif'
  			],
  			sans: [
  				'Open Sans',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			roboto: [
  				'Roboto',
  				'sans-serif'
  			],
  			schoolbook: [
  				'Century Schoolbook',
  				'serif'
  			]
  		},
  		colors: {
  			primaryYellow: '#E6BD1C',
  			sosfCyan: '#089F8D',
  			pink200: '#f7d3e5',
  			cyan300: '#95fae3',
  			cyan50: '#effefa',
  			sosfyPink: '#C7336E',
  			pink: '#f00c93',
  			cyan: '#55BDB5',
  			yellow: '#ffc40c',
  			primary_blue: '#0047AB',
  			white: '#ffffff',
  			milk: '#fafafa',
  			grey: '#d3d3d3',
  			blue: '#3F5CA8',
			background_blue: '#EFF1F3',
			click_blue: '#B7C8F4',
			partnerblue: '#B9E7FF',
  			investpurple: '#FFBEDE',
  			governblue: '#BFD9FE',
  			participateorange: '#FFF4B4',
  			secondary_blue: '#B7C8F4',
  			black: '#000000',
  			light_blue: '#239ddb',
  			dark_blue: '#142850',

  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundColor: {
  			milk: '#fafafa',
  			grey: '#d3d3d3',
  			white: '#ffffff',
  			blue: '#0284c7',
  			secondary_blue: '#B7C8F4',
  			primary_blue: '#0047AB',
  			black: '#000000',
  			cyan: '#acfffc',
  			primaryYellow: '#E5CC34',
  			cyan300: '#95fae3',
  			pink200: '#f7d3e5',
  			sosfCyan: '#089F8D',
  			sosfyPink: '#EC549F',
  			bgVariant: 'rgb(8 159 141 / 0.05)',
  			cyan950: '#02312f',
  			cyan900: '#11504a',
  			cyan800: '#0e6159',
  			cyan700: '#0b7a6e',
			partnerblue: '#B9E7FF',
			investpurple: '#FFBEDE',
			governblue: '#BFD9FE',
			participateorange: '#FFF4B4'
  		},

  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require("tailwindcss-animate")],
};

