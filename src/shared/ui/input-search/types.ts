import { InputHTMLAttributes } from 'react';

export type InputSearchProps = InputHTMLAttributes<HTMLInputElement> & {
	delay?: number;
};