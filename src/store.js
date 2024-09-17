import {configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { authApi } from "./Service/FatchApi"
import AuthSlice from "./Service/Slice/AuthSlice"



const store = configureStore({
    reducer:{
         [authApi.reducerPath]:authApi.reducer,
         auth:AuthSlice
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(authApi.middleware),
})

setupListeners(store.dispatch)
export default store