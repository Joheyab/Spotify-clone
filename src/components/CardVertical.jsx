import {
    MdPauseCircle,
    MdOutlinePlayCircleFilled,
  } from "react-icons/md";
export function CardVertical({imageName, firstInfo, secondInfo, isReproduction, isArtist}) {
  return (
    <>
      <div className="card-vertical">
        {isArtist ? 
        <img src={`/imagenes/${imageName}`}
          className="image-card-vertical-artist"
          alt={firstInfo}/> 
          :
          <img src={`/imagenes/${imageName}`}
          className="image-card-vertical"
          alt={firstInfo}/>
          }

        <div className="info-button-card-vertical">
          <h5>{firstInfo}</h5>
          <h6>{secondInfo}</h6>
          {isReproduction ? <div><MdPauseCircle style={{ zIndex: "1" }} /> </div> : <div>
                    <MdOutlinePlayCircleFilled />
                  </div> }
          
        </div>
      </div>
    </>
  );
}