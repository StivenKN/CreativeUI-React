import {type HTMLAttributes, type ReactNode} from 'react';

type ButtonProps = {
	children: ReactNode;
	backgroundColor?: string;
	className?: string;
} & HTMLAttributes<HTMLElement>;

function Button({backgroundColor = 'rgb(0, 119, 255)', children, className}: ButtonProps): JSX.Element {
	return (
		<button style={{backgroundColor, padding: '1rem', border: 'none', borderRadius: '0.5rem', cursor: 'pointer'}} className={`${className}`}>
			{children}
		</button>
	);
}

export default Button;
