import { useSelector, useDispatch } from "react-redux";
import { logIn } from "./reducers/user/userReducer";

export const App = () => {
  const dispatch = useDispatch();

  const checkLogin = () => {
    dispatch(logIn());
  };

  const {email, password, username, isLogged, token, age} = useSelector(state => state.user);
  return (
    <div className="App">
      <h1>Redux Simple Web</h1>
      <h2>Username: {username}</h2>
      <h2>Email: {email}</h2>
      <h2>Password: {password}</h2>
      <h2>Age: {age}</h2>
      <h2>Logged: {isLogged ? "Yes" : "No"}</h2>
      <h2>Token: {token}</h2>

        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" />
        </div>
       
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-primary"onClick={() => checkLogin()
        }>Submit</button>
    </div>
  );
};
