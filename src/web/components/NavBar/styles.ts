import styled from "styled-components";

export const Container = styled.div`
	position: sticky;
	top: 0;
	height: 6.4rem;
	padding: 0 var(--horizontal-padding);
	box-shadow: 0 3px 3px var(--shadow);
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	height: 100%;
	max-width: var(--page-max-width);
	margin: 0 auto;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

export const LogoContainer = styled.div`
	> a > svg {
		@media (max-width: 360px) {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 4.5rem;
			height: 4.5rem;

			> path:first-child {
				display: none;
			}
		}
	}
`;

export const Avatar = styled.button`
	position: relative;
	display: flex;
	align-items: center;
	border-radius: 50%;
	cursor: pointer;
	background: var(--gray-100);
	width: 4rem;
	height: 4rem;

	> div {
		width: 100%;
		height: 100%;
		border-radius: inherit;
	}

	> svg {
		width: 100%;
		height: 100%;
	}
`;
