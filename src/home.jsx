import "./Home.css";
import { SideBar } from "./components/SideBar";
import { Player } from "./components/Player";
import { TopBar } from "./components/TopBar";
import { CardHorizontal } from "./components/CardHorizontal";
import { CardVertical } from "./components/CardVertical";
export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="first-home-container">
          <SideBar />
          <div className="music-container">
            <TopBar />
            <h5>¡Buenas noches!</h5>
            <div className="first-container-cards">
              <CardHorizontal
                imageName="primeraVez_EladioCarrion.jpg"
                name="Primera Vez"
                isReproduction={true}
              />
              <CardHorizontal imageName="RelsB.jpg" name="Rels B" />
              <CardHorizontal
                imageName="TopCancionesGlobal.jpg"
                name="Canciones más escuchadas: Global"
              />
              <CardHorizontal
                imageName="ArticMonkeys.jpg"
                name="Artic Monkeys"
              />
              <CardHorizontal
                imageName="BornToDie_LanaDelRey.jpg"
                name="Born To Die"
              />
              <CardHorizontal imageName="Rain_TheScript.jpg" name="Rain" />
            </div>
            <h6>Escuchado recientemente</h6>
            <div className="second-container-cards">
              <CardVertical
                imageName="Dimelo_PauloLondra.jpg"
                firstInfo="Dimelo"
                secondInfo="Paulo Londra"
              />
              <CardVertical
                imageName="Monarca_EladioCarrion.jpg"
                firstInfo="Toretto"
                secondInfo="Eladio Carrion"
              />
              <CardVertical
                imageName="Coldplay.jpg"
                firstInfo="Coldplay"
                isArtist={true}
                secondInfo="Artista"
              />
              <CardVertical
                imageName="Imaginaste_JhayC.jpg"
                firstInfo="Imaginaste"
                secondInfo="Jhayco, Tainy"
              />
              <CardVertical
                imageName="DebiSuponerlo_Morat.jpg"
                firstInfo="Debi suponerlo"
                secondInfo="Morat"
              />
              <CardVertical
                imageName="OurSong_Niall_AnneMarie.jpg"
                firstInfo="Our song"
                secondInfo="Anne Marie, Niall Horan"
              />
              <CardVertical
                imageName="SuspiciouMinds_Elvis.jpg"
                firstInfo="Suspicious minds"
                secondInfo="Elvis Presley"
              />
            </div>
            <h6> Sumergete de nuevo en tu música</h6>
            <div className="third-container-card">
              <CardVertical
                imageName="QueNosPaso_AnuelAA.jpg"
                firstInfo="¿Qué nos pasó?"
                secondInfo="Anuel AA"
              />
              <CardVertical
                imageName="ComoDormiste_RelsB.jpg"
                firstInfo="cómo dormiste?"
                secondInfo="Rels B"
              />
              <CardVertical
                imageName="BornToDie_LanaDelRey.jpg"
                firstInfo="Summertime sadness"
                secondInfo="Lana del Rey"
              />
              <CardVertical
                imageName="Astroworld_Travis.jpg"
                firstInfo="Astroworld"
                secondInfo="Travis Scott"
              />
              <CardVertical
                imageName="Mora.jpg"
                firstInfo="Mora"
                secondInfo="Artista"
                isArtist={true}
              />
              <CardVertical
                imageName="BadBunny.jpg"
                firstInfo="Bad Bunny"
                secondInfo="Artista"
                isArtist={true}
              />
              <CardVertical
                imageName="Treasure_BrunoMars.jpg"
                firstInfo="Treasure"
                secondInfo="Bruno Mars"
              />
            </div>
            <h6>Recomendaciones</h6>
            <div className="fourth-container-card">
            <CardVertical
                imageName="Monarca_EladioCarrion.jpg"
                firstInfo="Monarca"
                secondInfo="Eladio Carrion"
              />
              <CardVertical
                imageName="Dimelo_PauloLondra.jpg"
                firstInfo="Solo pienso en ti"
                secondInfo="Paulo Londra, De La Ghetto, Justin Quiles"
              />
              <CardVertical
                imageName="CigarretesAfterSex.jpg"
                firstInfo="Cigarettes After Sex"
                secondInfo="Artista"
                isArtist={true}
              />
              <CardVertical
                imageName="EladioCarrion_Mix.jpg"
                firstInfo="Eladio Carrion Mix"
                secondInfo="DEKKO, Beéle, Rauw Alejandro y más"
              />
              <CardVertical
                imageName="Nicki Nicole.jpg"
                firstInfo="Nicki Nicole"
                secondInfo="Artista"
                isArtist={true}
              />
              <CardVertical
                imageName="DuaLipa.jpg"
                firstInfo="Dua Lipa"
                secondInfo="Artista"
                isArtist={true}
              />
            </div>
          </div>
        </div>
        <div className="reproduction-container">
          <Player />
        </div>
      </div>
    </>
  );
}
