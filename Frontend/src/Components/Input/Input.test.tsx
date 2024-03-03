import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import '@testing-library/jest-dom/vitest';
describe('Input test', () => {
	it('Header snapshot', () => {
		const input = render(<Input />);
		expect(input).toMatchSnapshot();
	});
});
