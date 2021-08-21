import "../../../assets/css/ruang-admin.css";
import "../../../assets/css/css/fontawesome.css";
import "../../../assets/css/css/all.min.css";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { startLogout } from "../../../actions/auth";


const HeaderScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <nav className="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
    {/*   <button id="sidebarToggleTop" className="btn btn-link rounded-circle mr-3">
        <i className="fa fa-bars"></i>
      </button> */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow">
          <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-search fa-fw"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown">
            <form className="navbar-search">
              <div className="input-group">
                <input type="text" className="form-control bg-light border-1 small" placeholder="What do you want to look for?"
                  aria-label="Search" aria-describedby="basic-addon2" style= {{ borderColor: "#3f51b5" }} />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        
         
         
        <div className="topbar-divider d-none d-sm-block"></div>
        <li className="nav-item dropdown no-arrow">
          <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <img className="img-profile rounded" src="http://simpleicon.com/wp-content/uploads/user-4.png" style= {{width: "100%"}} />
        
            
              
           
          </a>
          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
            <a className="dropdown-item" href="#">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              <Link to="/panel/basic-data" >Basic Data</Link>
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Settings
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              Activity Log
            </a>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" onClick={handleLogout} aria-expanded="false">
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderScreen;
