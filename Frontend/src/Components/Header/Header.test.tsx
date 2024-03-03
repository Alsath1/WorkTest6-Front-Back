import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import '@testing-library/jest-dom/vitest';
describe('Headers test', () => {
	it('All elements are rendered', () => {
		render(<Header />);
		expect(screen.getByText(/дмитрий/i)).toBeInTheDocument();
		expect(screen.getByText(/last seen 45 min ago/i)).toBeInTheDocument();
	});
	it('Header snapshot', () => {
		const header = render(<Header />);
		expect(header).toMatchSnapshot();
	});
});
