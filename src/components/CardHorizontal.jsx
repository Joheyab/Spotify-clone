import {
    MdPauseCircle,
    MdOutlinePlayCircleFilled,
  } from "react-icons/md";
export function CardHorizontal({imageName, name, isReproduction}) {
  return (
    <>
      <div className="card-horizontal">
        <img
          src={`/imagenes/${imageName}`}
          className="image-card"
          alt={name}
        ></img>
        <div className="info-button-card">
          <p>{name}</p>
          {isReproduction ? <MdPauseCircle style={{ zIndex: "1" }} /> : <MdOutlinePlayCircleFilled /> }
          
        </div>
      </div>
    </>
  );
}
