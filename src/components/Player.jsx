import { BiShuffle, BiCoinStack } from "react-icons/bi";
import { TbMicrophone2, TbDevices2 } from "react-icons/tb";
import { IoMdMegaphone } from "react-icons/io";
import {BsHeart} from "react-icons/bs"
import { CiMaximize1 } from "react-icons/ci";
import {MdSkipPrevious, MdSkipNext,
    MdOutlineRepeat, MdPauseCircle } from "react-icons/md"
export function Player() {
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
  return (
    <>
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
    </>
  );
}
