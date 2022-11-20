import { useState } from "react";
import { BsPerson, BsCaretDownFill } from "react-icons/bs";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
export function TopBar() {
  const [show, setShow] = useState(false);
  return (
    <>
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
    </>
  );
}
