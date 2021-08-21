import "../../assets/css/ruang-admin.css";
import "../../assets/css/css/fontawesome.css";
import "../../assets/css/css/all.min.css";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";

const HeaderScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
        <img src="../Logo.png" className="img-fluid" style={{ height:'60%',width:'150px'  }}/>

        <div className="topbar-divider d-none d-sm-block"></div>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow mr-5">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-1 small"
                    placeholder="What do you want to look for?"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    style={{ borderColor: "#3f51b5" }}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderScreen;
