import { startLogin } from "../actions/auth.js"

const LoginPage = () => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Boilerplate Login</h1>
        <button className="button" onClick={startLogin}>Login with Google</button>
      </div>
    </div>
  )
}

export default LoginPage