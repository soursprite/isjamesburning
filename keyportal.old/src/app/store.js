import { configureStore } from '@reduxjs/toolkit'
import profile from '../store/index'

export default configureStore({
    firstName: 'Gregory',
    lastName: 'Parks',

},
    {
        reducer: {
            counter: counterReducer
        }
    })