import React from "react";

const NavNotice = () => {
  return (
    <li className="nav-item dropdown">
      {/* <a className="nav-link nav-icon" href="/" data-bs-toggle="dropdown"> */}
      <i className="bi bi-bell"></i>
      <span className="badge bg-primary badge-number">4</span>
      {/* </a> */}

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 4 new notifications
          <a href="/">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              view all
            </span>
          </a>
        </li>
        <li>
          <div className="dropdown-divider"></div>
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <p>30 min. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-x-circle text-danger"></i>
          <div>
            <h4>Lorem ipsum dolor</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>1 hr. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i className="bi bi-check-circle text-success"></i>{" "}
          {/* Fixed class name */}
          <div>
            <h4>Lorem ipsum dolor</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>2 hr. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>
      </ul>
    </li>
  );
};

export default NavNotice;
