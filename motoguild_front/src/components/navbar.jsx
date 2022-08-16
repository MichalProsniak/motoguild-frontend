import React, { Component } from "react";

class Navbar extends Component {
  state = {
    count: 0,
    dropdownMenuSpanClass:
      "d-block link-dark text-decoration-none dropdown-toggle",
    dropwodnMenuAria: "false",
    dropdownMenuUlClass: "dropdown-menu text-small",
    dropdownMenuUlStyle: {},
  };

  constructor() {
    super();
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
  }

  nonBlankStyles = {
    position: "absolute",
    inset: "0px 0px auto auto",
    margin: "0px",
    transform: "translate(0px, 34px)",
  };

  showDropdownMenu() {
    if (this.state.dropwodnMenuAria === "false") {
      this.setState({ dropdownMenuUlStyle: this.nonBlankStyles });
      this.setState({ dropwodnMenuAria: "true" });
      this.setState({
        dropdownMenuSpanClass:
          "d-block link-dark text-decoration-none dropdown-toggle show",
      });
      this.setState({ dropdownMenuUlClass: "dropdown-menu text-small show" });
    } else {
      this.setState({ dropdownMenuUlStyle: {} });
      this.setState({ dropwodnMenuAria: "false" });
      this.setState({
        dropdownMenuSpanClass:
          "d-block link-dark text-decoration-none dropdown-toggle",
      });
      this.setState({ dropdownMenuUlClass: "dropdown-menu text-small" });
    }
  }

  render() {
    return (
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <span className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              ></svg>
            </span>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <span className="nav-link px-2 link-secondary">Overview</span>
              </li>
              <li>
                <span className="nav-link px-2 link-dark">Inventory</span>
              </li>
              <li>
                <span className="nav-link px-2 link-dark">Customers</span>
              </li>
              <li>
                <span className="nav-link px-2 link-dark">Products</span>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="dropdown text-end">
              <span
                onClick={this.showDropdownMenu}
                className={this.state.dropdownMenuSpanClass}
                data-bs-toggle="dropdown"
                aria-expanded={this.state.dropwodnMenuAria}
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </span>
              <ul
                className={this.state.dropdownMenuUlClass}
                style={this.state.dropdownMenuUlStyle}
                data-popper-placement="bottom-end"
              >
                <li>
                  <span className="dropdown-item">New project...</span>
                </li>
                <li>
                  <span className="dropdown-item">Settings</span>
                </li>
                <li>
                  <span className="dropdown-item">Profile</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <span className="dropdown-item">Sign out</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
