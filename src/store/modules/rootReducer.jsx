import { combineReducers } from '@reduxjs/toolkit'
import User from './user/userSlice'
import Errands from './errands/errandsSlice'

export default combineReducers({
    User,
    Errands
})