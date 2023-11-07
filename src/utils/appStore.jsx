

import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"


// we are configuing the store here
const appStore = configureStore(

    {

        //this reducer will take different reducers from differnet slices
        reducer: {

            user: userReducer,

        }
    }

)


export default appStore;