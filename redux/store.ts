import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    userSlice: () => ({ name: "John Doe" }),
  }
})

export default store