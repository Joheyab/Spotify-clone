import "./Home.css";
import {
  MdHomeFilled,
  MdSkipPrevious,
  MdPauseCircle,
  MdSkipNext,
  MdOutlineRepeat,
  MdOutlinePlayCircleFilled,
  MdNavigateNext,
  MdNavigateBefore,
} from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { BiShuffle, BiCoinStack } from "react-icons/bi";
import { TbMicrophone2, TbDevices2 } from "react-icons/tb";
import { IoMdMegaphone } from "react-icons/io";
import { CiMaximize1 } from "react-icons/ci";
import {
  BsPlusSquareFill,
  BsBookmarkHeartFill,
  BsBookmarkFill,
  BsHeart,
  BsPerson,
  BsCaretDownFill,
} from "react-icons/bs";
import { useState } from "react";
export default function Home() {
  const containerStyles = {
    height: 4,
    width: "580px",
    backgroundColor: "gray",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: "33%",
    backgroundColor: "white",
    borderRadius: "inherit",
    textAlign: "right",
  };
  const containerStyles2 = {
    height: 4,
    width: "80px",
    backgroundColor: "gray",
    borderRadius: 50,
  };

  const fillerStyles2 = {
    height: "100%",
    width: "20%",
    backgroundColor: "white",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const [show, setShow] = useState(false);
  return (
    <>
      <div className="home-container">
        <div className="first-home-container">
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
          <div className="music-container">
            <div className="topBar">
              <div className="buttons-topBar">
                <button type="submit">
                  <MdNavigateBefore
                    role={"img"}
                    style={{ color: "white", width: "42px", height: "44px" }}
                  />
                </button>
                <button>
                  <MdNavigateNext
                    style={{ color: "white", width: "42px", height: "44px" }}
                  />
                </button>
              </div>
              <button
                className="button-account"
                onClick={() => {
                  show ? setShow(false) : setShow(true);
                }}
              >
                <BsPerson className="profile-svg" />
                user
                <BsCaretDownFill />
              </button>
            </div>
            {show && (
              <div className="settings-buttons-account">
                <nav>
                  <ul>
                    <li>Cuenta</li>
                    <li>Perfil</li>
                    <li>Configuración</li>
                    <span
                      style={{
                        borderTop: "rgba(128, 128, 128, 0.185) solid 1px",
                      }}
                    ></span>
                    <li>Cerrar sesión</li>
                  </ul>
                </nav>
              </div>
            )}
            <h5>¡Buenas noches!</h5>
            <div className="first-container-cards">
              <div className="card-horizontal">
                <img
                  src="/imagenes/primeraVez_EladioCarrion.jpg"
                  className="image-card"
                  alt="Primera Vez- Eladio Carrion"
                ></img>
                <div className="info-button-card">
                  <p>Primera Vez</p>
                  <MdPauseCircle style={{ zIndex: "1" }} />
                </div>
              </div>
              <div className="card-horizontal">
                <img
                  src="/imagenes/RelsB.jpg"
                  className="image-card"
                  alt="Rels B"
                ></img>
                <div className="info-button-card">
                  <p>Rels B</p>
                  <MdOutlinePlayCircleFilled />
                </div>
              </div>
              <div className="card-horizontal">
                <img
                  src="/imagenes/TopCancionesGlobal.jpg"
                  className="image-card"
                  alt="TopCancionesGlobal"
                ></img>
                <div className="info-button-card">
                  <p>Canciones más escuchadas: Global</p>
                  <MdOutlinePlayCircleFilled />
                </div>
              </div>
              <div className="card-horizontal">
                <img
                  src="/imagenes/ArticMonkeys.jpg"
                  className="image-card"
                  alt="ArticMonkeys"
                ></img>
                <div className="info-button-card">
                  <p>Artic Monkeys</p>
                  <MdOutlinePlayCircleFilled />
                </div>
              </div>
              <div className="card-horizontal">
                <img
                  src="/imagenes/BornToDie_LanaDelRey.jpg"
                  className="image-card"
                  alt="BornToDie_LanaDelRey"
                ></img>
                <div className="info-button-card">
                  <p>Born To Die</p>
                  <MdOutlinePlayCircleFilled />
                </div>
              </div>
              <div className="card-horizontal">
                <img
                  src="/imagenes/Rain_TheScript.jpg"
                  className="image-card"
                  alt="Rain_TheScript"
                ></img>
                <div className="info-button-card">
                  <p>Rain</p>
                  <MdOutlinePlayCircleFilled />
                </div>
              </div>
            </div>
            <h6>Escuchado recientemente</h6>
            <div className="second-container-cards">
              <div className="card-vertical">
                <img
                  src="/imagenes/Dimelo_PauloLondra.jpg"
                  className="image-card-vertical"
                  alt="Dimelo_PauloLondra"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Dimelo</h5>
                  <h6>Paulo Londra</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/Monarca_EladioCarrion.jpg"
                  className="image-card-vertical"
                  alt="Torreto_EladioCarrion"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Toretto</h5>
                  <h6>Eladio Carrion</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/Coldplay.jpg"
                  className="image-card-vertical-artist"
                  alt="Coldplay"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Coldplay</h5>
                  <h6>Artista</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/Imaginaste_JhayC.jpg"
                  className="image-card-vertical"
                  alt="Imaginaste_JhayC"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Imaginaste</h5>
                  <h6>Jhayco, Tainy</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/DebiSuponerlo_Morat.jpg"
                  className="image-card-vertical"
                  alt="DebiSuponerlo_Morat"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Debi suponerlo</h5>
                  <h6>Morat</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/OurSong_Niall_AnneMarie.jpg"
                  className="image-card-vertical"
                  alt="OurSong_Niall_AnneMarie"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Our song</h5>
                  <h6>Anne Marie, Niall Horan</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/SuspiciouMinds_Elvis.jpg"
                  className="image-card-vertical"
                  alt="SuspiciouMinds_Elvis"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Suspicious minds</h5>
                  <h6>Elvis Presley</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
            </div>
            <h6> Sumergete de nuevo en tu música</h6>
            <div className="third-container-card">
              <div className="card-vertical">
                <img
                  src="/imagenes/QueNosPaso_AnuelAA.jpg"
                  className="image-card-vertical"
                  alt="QueNosPaso_AnuelAA"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>¿Qué nos pasó?</h5>
                  <h6>Anuel AA</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/ComoDormiste_RelsB.jpg"
                  className="image-card-vertical"
                  alt="ComoDormiste_RelsB"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>cómo dormiste?</h5>
                  <h6>Rels B</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/BornToDie_LanaDelRey.jpg"
                  className="image-card-vertical"
                  alt="SummertimeSadness_LanaRey"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Summertime sadness</h5>
                  <h6>Lana del Rey</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/Astroworld_Travis.jpg"
                  className="image-card-vertical"
                  alt="Astroworld_Travis"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Astroworld</h5>
                  <h6>Travis Scott</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/Mora.jpg"
                  className="image-card-vertical-artist"
                  alt="Mora"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Mora</h5>
                  <h6>Artista</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/BadBunny.jpg"
                  className="image-card-vertical-artist"
                  alt="BadBunny"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Bad Bunny</h5>
                  <h6>Artista</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/Treasure_BrunoMars.jpg"
                  className="image-card-vertical"
                  alt="Treasure_BrunoMars"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Treasure</h5>
                  <h6>Bruno Mars</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
            </div>
            <h6>Recomendaciones</h6>
            <div className="fourth-container-card">
              <div className="card-vertical">
                <img
                  src="/imagenes/Monarca_EladioCarrion.jpg"
                  className="image-card-vertical"
                  alt="Monarca_EladioCarrion"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Monarca</h5>
                  <h6>Eladio Carrion</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/Dimelo_PauloLondra.jpg"
                  className="image-card-vertical"
                  alt="SoloPiensoEnTi_PauloLondra"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Solo pienso en ti</h5>
                  <h6>Paulo Londra, De La Ghetto, Justin Quiles</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/CigarretesAfterSex.jpg"
                  className="image-card-vertical-artist"
                  alt="CigarretesAfterSex"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Cigarettes After Sex</h5>
                  <h6>Artista</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/EladioCarrion_Mix.jpg"
                  className="image-card-vertical"
                  alt="EladioCarrion_Mix"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Eladio Carrion Mix</h5>
                  <h6>DEKKO, Beéle, Rauw Alejandro y más</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/Nicki Nicole.jpg"
                  className="image-card-vertical-artist"
                  alt="BadBunny"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Nicki Nicole</h5>
                  <h6>Artista</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
              <div className="card-vertical">
                <img
                  src="/imagenes/DuaLipa.jpg"
                  className="image-card-vertical-artist"
                  alt="DuaLipa"
                ></img>
                <div className="info-button-card-vertical">
                  <h5>Dua Lipa</h5>
                  <h6>Artist</h6>
                  <div>
                    <MdOutlinePlayCircleFilled />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reproduction-container">
          <div className="info-song-reproduction">
            <img
              src="/imagenes/LaPrimerVez_EladioCarrion_Large.jpg"
              className="imagen-reproduction"
            ></img>
            <div>
              <span style={{ fontSize: "16px" }}>Primera Vez</span>
              <span style={{ color: "gray", fontSize: "12px" }}>
                Eladio Carrion, Nicky Jam
              </span>
            </div>
            <BsHeart style={{ color: "gray", fontSize: "20px" }} />
          </div>
          <div className="reproductor">
            <div className="buttons-reproductor">
              <BiShuffle style={{ fontSize: "20px" }} />
              <MdSkipPrevious style={{ color: "rgb(224, 212, 212)" }} />
              <MdPauseCircle style={{ color: "white", fontSize: "48px" }} />
              <MdSkipNext style={{ color: "rgb(224, 212, 212)" }} />
              <MdOutlineRepeat style={{ fontSize: "20px" }} />
            </div>
            <div
              style={{ color: "white", fontWeight: "300", fontSize: "12px" }}
              className="progressBar"
            >
              <span>1:05</span>
              <div style={containerStyles}>
                <div style={fillerStyles}>
                  <span></span>
                </div>
              </div>
              <span>3:09</span>
            </div>
          </div>
          <div className="last-buttons-reproduction">
            <TbMicrophone2 />
            <BiCoinStack />
            <TbDevices2 />
            <IoMdMegaphone />
            <div style={containerStyles2}>
              <div style={fillerStyles2}>
                <span></span>
              </div>
            </div>
            <CiMaximize1 />
          </div>
        </div>
      </div>
    </>
  );
}
