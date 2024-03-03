import { createSlice } from '@reduxjs/toolkit';
// типизация локального хранилища
interface Users {
	message: UserEl[];
}

interface UserEl {
	text: string;
	id: number;
	name: string;
}
// стартовае значение
export const initialState: Users = {
	message: []
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// логика добовления сообщения
		// данные с сервера поподают сюда
		setMessage(state, action) {
			state.message.push({
				text: action.payload,
				id: state.message.length + 1,
				name: 'User'
			});
		}
	}
});

export default userSlice.reducer;
