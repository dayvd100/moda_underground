import {
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterXFill,
} from "react-icons/ri";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="container">
        <section className="normals">
          <h1 className="texts">$TyL</h1>
        </section>
        <section className="parallax">
          <div className="background bg-1"></div>
          <h1>Drip Too Hard</h1>
        </section>

        <section className="normal">
          <h1>Drip é o estilo que fala sem palavras.</h1>
        </section>

        <section className="parallax">
          <div className="background bg-2"></div>
          <h1>I feel like I'm Gucci Mane in 2006</h1>
        </section>

        <section className="normal">
          <h1>Sua roupa é a tela, seu estilo é a pintura.</h1>
        </section>

        <section className="parallax">
          <div className="background bg-3"></div>
          <h1>black lives matter</h1>
        </section>
      </div>
    </div>
  );
}

export default Home;
