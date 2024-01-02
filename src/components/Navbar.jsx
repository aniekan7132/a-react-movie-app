import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import "./Navbar.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Trending from "./Trending";
import Pricing from "./Pricing";

export const Container = React.createContext();

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <Container.Provider value={{ toggle, inputValue }}>
      <>
        <nav id={toggle ? "" : "navbar-color"}>
          <div className="nav-options">
            <div className="navbar-menu">
              {toggleMenu ? (
                <RiCloseLine
                  color="#fff"
                  size={27}
                  onClick={() => setToggleMenu(false)}
                />
              ) : (
                <RiMenuLine
                  color="#fff"
                  size={27}
                  onClick={() => setToggleMenu(true)}
                />
              )}
              {toggleMenu && (
                <div className="gpt3__navbar-menu_container scale-up-center">
                  <div className="gpt3__navbar-menu_container-links">
                    <NavLink
                      to=""
                      style={({ isActive }) => {
                        return { color: isActive ? "#fff" : "#ee9b00" };
                      }}
                    >
                      <p id={toggle ? "movies" : "movies-light"}>Movies</p>
                    </NavLink>
                    <NavLink
                      to="/TvShows"
                      style={({ isActive }) => {
                        return { color: isActive ? "#fff" : "#ee9b00" };
                      }}
                    >
                      <p id={toggle ? "movies" : "movies-light"}>Tv Shows</p>
                    </NavLink>
                    <NavLink
                      to="/Trending"
                      style={({ isActive }) => {
                        return { color: isActive ? "#fff" : "#ee9b00" };
                      }}
                    >
                      <p id={toggle ? "movies" : "movies-light"}>Trending</p>
                    </NavLink>
                    <NavLink
                      to="/Pricing"
                      style={({ isActive }) => {
                        return { color: isActive ? "#fff" : "#ee9b00" };
                      }}
                    >
                      <p id={toggle ? "movies" : "movies-light"}>Pricing</p>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            <h1 id={toggle ? "" : "heading"}>REACTFLIX</h1>
            <NavLink
              to=""
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#ee9b00" };
              }}
            >
              <span id={toggle ? "movies" : "movies-light"}>Movies</span>
            </NavLink>
            <NavLink
              to="/TvShows"
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#ee9b00" };
              }}
            >
              <span id={toggle ? "movies" : "movies-light"}>Tv Shows</span>
            </NavLink>
            <NavLink
              to="/Trending"
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#ee9b00" };
              }}
            >
              <span id={toggle ? "movies" : "movies-light"}>Trending</span>
            </NavLink>
            <NavLink
              to="/Pricing"
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "#ee9b00" };
              }}
            >
              <span id={toggle ? "movies" : "movies-light"}>Pricing</span>
            </NavLink>
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Search whatever you want"
              onChange={(e) => setInputValue(e.target.value)}
              className={active ? "input active" : "input"}
            />
            <HiSearch
              fontSize={21}
              color={toggle ? "black" : "#ff206e"}
              id="search"
            />
            <HiSearch
              fontSize={29}
              color={toggle ? "#fff" : "#ff206e"}
              id="search-mobile"
              onClick={() => setActive(!active)}
            />
            <IoIosClose
              className={active ? "closebtn active" : "closebtn"}
              cursor={"pointer"}
              fontSize={40}
              onClick={() => setActive(!active)}
            />
            <div id="color-switcher" onClick={() => setToggle(!toggle)}>
              <div
                id={toggle ? "color-switcher-mover" : "color-switcher-moved"}
              ></div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="" element={<Movies />} />
          <Route path="TvShows" element={<TvShows />} />
          <Route path="Trending" element={<Trending />} />
          <Route path="Pricing" element={<Pricing />} />
        </Routes>
      </>
    </Container.Provider>
  );
};

export default Navbar;
