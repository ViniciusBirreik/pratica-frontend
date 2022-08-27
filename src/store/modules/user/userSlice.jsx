import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const adapter = createEntityAdapter({
    selectId: (user) => user.uid
})

export const { selectAll, selectById } = adapter.getSelectors((state) => state.user)

export const UserSlice = createSlice({
    name: 'User',
    initialState: adapter.getInitialState(),
    reducers: {
        addUser: adapter.addOne
    }
})

export const { addUser } = UserSlice.actions
export default UserSlice.reducer