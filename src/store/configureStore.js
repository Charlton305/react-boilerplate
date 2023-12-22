import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../reducers/auth"

export default () => {
  const store = configureStore({
    reducer: {
      auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
  })
  return store
}
