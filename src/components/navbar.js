import logo from "../assets/logo.svg";
import "./navbar.css";
import { toggleNav, filterSidebar } from "../store/reducer";
import { useSelector, useDispatch } from "react-redux";
import magnifyglass from "../assets/magnify-glass.svg";
import { useRef, useEffect } from "react";
import burgermenu from "../assets/burger-menu.svg";
import { sidebarItems } from "../temp-data/temp-data";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <a href="#">
          <img id="logo" src={logo} />
        </a>
      </div>
      <div className="navbar-item">
        <a href="#" onClick={() => dispatch(toggleNav())}>
          <img id="burger-menu" src={burgermenu} />
        </a>
        <div className="navbar-item" id="desktop-navbar">
          {sidebarItems.map((item) => (
            <div className="navbar-links" key={item.id}>
              <a href={item.href} className="navbar-container">
                <p>{item.title}</p>
                <img id="desktop-navbar-icon" src={item.blackicon} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <SideBar />
    </nav>
  );
};

// Checks if the user clicked outside a component
function ClickDetector(ref) {
  const dispatch = useDispatch();
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        ref.current.className == "sidebar"
      ) {
        dispatch(toggleNav());
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const SideBar = () => {
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  ClickDetector(wrapperRef);
  const isMenuOn = useSelector((state) => state.isOn);
  const filterQuery = useSelector((state) => state.sideBarFilter);
  return (
    <div className={isMenuOn ? "sidebar" : "sidebar-active"} ref={wrapperRef}>
      <div className="upper-sidebar">
        <img id="sidebar-logo" src={logo} />
        <h1 id="sidebar-header">Trader's Lounge</h1>
        <div className="sidebar-search">
          <input
            id="filter-input"
            placeholder="Start typing to filter.."
            onChange={(e) => dispatch(filterSidebar(e.target.value))}
          ></input>
          <img src={magnifyglass} />
        </div>
        <div className="sidebar-items">
          {sidebarItems
            .filter((item) => item.title.toLowerCase().includes(filterQuery))
            .map((filteredItem) => (
              <div className="sidebar-item" key={filteredItem.id}>
                <img id="sidebar-icon" src={filteredItem.icon} />
                <a href={filteredItem.href}>{filteredItem.title}</a>
              </div>
            ))}
        </div>
      </div>
      <p id="sidebar-help-text">
        Do you need{" "}
        <a href="#" id="help-text">
          help
        </a>
        ?
      </p>
    </div>
  );
};
export default Navbar;
