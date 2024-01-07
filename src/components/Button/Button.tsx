import {type HTMLAttributes, type ReactNode} from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
 background: rgb(0, 119, 255);
 padding: 1rem;
 border: none;
 border-radius: 0.5rem;
 cursor: pointer;
 transition: background 0.3s ease; 
`;

type ButtonProps = {
	children: ReactNode;
	background?: string;
	className?: string;
} & HTMLAttributes<HTMLElement>;

function Button({background, children, className}: ButtonProps): JSX.Element {
	return (
		<ButtonStyles style={{background}} className={`${className}`}>
			{children}
		</ButtonStyles>
	);
}

export default Button;
