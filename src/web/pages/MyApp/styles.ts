import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

		&:focus-visible {
			outline: 3px solid transparent;
		 	box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.secondary};
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
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.secondary};
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

	h1, h2, h3, h4, h5, h6 {
  	font-family: "Poppins", Arial, Helvetica, sans-serif;
	}

	a {
		color: ${({ theme }) => theme.colors.secondary};
		text-decoration: none;
	}

	button, input, textarea {
		background: transparent;
    color: ${({ theme }) => theme.colors.secondary};
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
		background: ${({ theme }) => theme.colors.scrollbarBackground};
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.scrollbar};
		border-radius: 4px;
	}

	::-webkit-scrollbar-corner {
		background: transparent;
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
