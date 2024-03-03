import { describe, expect, it } from 'vitest';
import UserSlice, {
	initialState,
	userSlice
} from '../../store/reducers/UserSlice.ts';
describe('redux test', () => {
	it('check All Elements', () => {
		const state = UserSlice(undefined, { type: 'unknown' });
		expect(state).toEqual(initialState);
	});
	it('redux reducer test', () => {
		const action = { type: userSlice.actions.setMessage.type, payload: 'test' };
		const result = UserSlice({ message: [] }, action);

		expect(result.message[0].text).toBe('test');
	});
});
