import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const adapter = createEntityAdapter({
    selectId: (errands) => errands.uid
})

export const { selectAll, selectById } = adapter.getSelectors((state) => state.errands)

export const ErrandsSlice = createSlice({
    name: 'Errands',
    initialState: adapter.getInitialState(),
    reducers: {
        addErrands: adapter.addOne
    }
})

export const { addErrands } = ErrandsSlice.actions
export default ErrandsSlice.reducer