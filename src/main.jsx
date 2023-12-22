import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routers/AppRoutes.jsx'
import configureStore from './store/configureStore.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import './actions/auth.js'
import "./firebase/firebase.js"
import { auth } from './firebase/firebase.js'
import { login, logout } from './reducers/auth.js'
import LoadingPage from "./components/LoadingPage"

const store = configureStore()
const root = ReactDOM.createRoot(document.getElementById('root'))

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    root.render(jsx)
  }
};

root.render(<LoadingPage />)

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    renderApp()
    hasRendered = true;
  } else {
    store.dispatch(logout())
    renderApp()
    hasRendered = false
  }
})

