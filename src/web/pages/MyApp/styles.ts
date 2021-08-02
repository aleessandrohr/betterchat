import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

		&:focus-visible {
			outline: 3px solid transparent;
		 	box-shadow: 0 0 0 3px var(--secondary);
		}
  }

	html, body {
		min-height: 100%;
	}

  html {
    font-size: 62.5%;
		scroll-behavior: smooth;
  }

  body {
    background: var(--background);
    color: var(--secondary);
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

	h1, h2, h3, h4, h5, h6 {
  	font-family: "Poppins", Arial, Helvetica, sans-serif;
	}

	a {
		color: var(--secondary);
		text-decoration: none;
	}

	button, input, textarea {
		background: transparent;
    color: var(--secondary);
		font-size: 1.6rem;
		border: transparent;
	}

	ul {
		list-style: none;
	}

	::-webkit-scrollbar {
		width: 0.8rem;
		height: 0.8rem;
	}

	::-webkit-scrollbar-track {
		background: var(--scrollbar-background);
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb {
		background: var(--scrollbar);
		border-radius: 4px;
	}

	::-webkit-scrollbar-corner {
		background: transparent;
	}

	:root {
		--main: #056CF2;
		--primary: #FFFFFF;
		--secondary: #1B1F22;
		--background: #FAFAFA;
		--scrollbar: var(--main);
		--scrollbar-background: var(--gray-100);
		--shadow: #00000050;
		--black: #000000;
		--white: #FFFFFF;
		--gray-800: #24282E;
		--gray-600: #586068;
		--gray-400: #6A727D;
		--gray-100: #D8DCDD;
		--google: #4285F4;
		--page-max-width: 126rem;
		--horizontal-padding: 2rem;
	}

	[data-theme='dark']  {
		--primary: #1D1D1D;
		--secondary: #E1E1E6;
		--background: #181818;
		--scrollbar: var(--main);
		--scrollbar-background: var(--gray-100);
		--black: #000000;
		--white: #FFFFFF;
		--gray-800: #C6C6C6;
		--gray-600: #AFAFAF;
		--gray-400: #6A727D;
		--gray-100: #24282E;
	}

	@media (max-width: 768px) {
    html {
      font-size: 57.5%;
    }
  }

	@media (max-width: 320px) {
    html {
      font-size: 55.5%;
    }
  }

	@media (max-width: 280px) {
    html {
      font-size: 52.5%;
    }
  }
`;
