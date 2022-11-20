import {
    BsPlusSquareFill,
    BsBookmarkHeartFill,
    BsBookmarkFill} from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import {MdHomeFilled } from "react-icons/md"
export function SideBar(){
    return (
        <>
        <div className="sideBar-container">
            <div className="logo-container">
              <a href="#">
                <img
                  src="/imagenes/spotifyLogoWhite.png"
                  className="logo"
                ></img>
                <span>Spotify</span>
              </a>
            </div>
            <nav className="links-sideBar">
              <ul>
                <li>
                  <a href="#" style={{ color: "white" }}>
                    <MdHomeFilled style={{ fontSize: "26px" }} />
                    <span>Inicio</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FiSearch style={{ fontSize: "26px" }} />
                    <span>Buscar</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <VscLibrary style={{ fontSize: "26px" }} />
                    <span>Tu biblioteca</span>
                  </a>
                </li>
                <li style={{ marginTop: "58px" }}>
                  <a href="#">
                    <BsPlusSquareFill style={{ fontSize: "26px" }} />
                    <span>Crear lista</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsBookmarkHeartFill
                      style={{ fontSize: "26px", color: "rgb(72, 7, 102)" }}
                    />
                    <span>Canciones que te gustan</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsBookmarkFill
                      style={{ fontSize: "26px", color: "#1ED760" }}
                    />
                    <span>Tus episodios</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </>
    )
}