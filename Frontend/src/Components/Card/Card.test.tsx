import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card } from './Card';

describe('Main test', () => {
	it('All elements are rendered', () => {
		const TestData = { id: 3, name: 'testName', text: 'testText' };
		render(<Card {...TestData} />);

		expect(screen.getByText(/testtext/i));
		expect(screen.getByText(/testname/i));
	});
	it('All elements are rendered Snapshot', () => {
		const TestData = { id: 3, name: 'testName', text: 'testText' };

		const list = render(<Card {...TestData} />);
		expect(list).toMatchSnapshot();
	});

	it('Render without data Snapshot', () => {
		const list = render(<Card />);
		expect(list).toMatchSnapshot();
	});
});
