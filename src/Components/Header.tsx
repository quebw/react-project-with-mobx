import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../Hooks/useStore";

export const Header = observer(() => {
  const {
    rootStore: { loginStore },
  } = useStore();

  const navigate = useNavigate();

  const onLogout = () => {
    loginStore.logout();
    navigate("./login");
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to={"/products"}
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">React Project With Mobx</span>
        </Link>

        {!loginStore.getUserDetails?.username && (
            <div className="col-md-3 text-end">
              <Link to={"/login"}>
                <button type="button" className="btn btn-outline-primary me-2">
                  Login
                </button>
              </Link>
            </div>
        )}

        {loginStore.getUserDetails?.username && (
            <div className="col-md-3 text-end">
              <span className="me-2">
                Welcome {loginStore.userDetails?.username}
              </span>
              <Link to={"/login"}>
                <button
                  type="button"
                  className="btn btn-outline-primary me-2"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </Link>
            </div>
        )}

        
      </header>
    </div>
  );
});
