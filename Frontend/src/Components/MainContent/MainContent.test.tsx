import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MainContent } from './MainContent';
import { jest, test } from '@jest/globals';

import { useAppSelector } from '../../hooks/redux.ts';
import UserSlice, { initialState } from '../../store/reducers/UserSlice.ts';

// как то замокать и проверить что будет выдавать при пустом списке и полном

describe('Main test', () => {
	it('All elements are rendered', () => {
		// const message = [{ id: 5, text: 'Test' }];
		// const result = message();
		// const component = render(<MainContent />);
		// expect(result).toEqual(message);
	});
});
