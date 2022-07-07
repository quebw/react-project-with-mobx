import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import { AiFillCustomerService } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Hooks/useStore";

export const Login = observer(() => {
  const {
    rootStore: { loginStore } ,
  } = useStore();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserName = (event: ChangeEvent<HTMLInputElement>) => setUserName(event.target.value);
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const navigate = useNavigate();

  const onLoggin = async () => {
    await loginStore.fetchUserToken(username,password);
    navigate("/");
  }

  return (
    <main className="form-signin">
      <form>
        <AiFillCustomerService size={70} />

        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Input.."
            value={username}
            onChange={onChangeUserName}
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button onClick={onLoggin} className="w-100 btn btn-lg btn-primary" type="button">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
      </form>
    </main>
  );
});
