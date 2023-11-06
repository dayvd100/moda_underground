// import {
//   RiInstagramFill,
//   RiPinterestFill,
//   RiTwitterXFill,
// } from "react-icons/ri";
import "../pages/home.css";

function Home({
  setScroll,
  setEndPage,
}: {
  setScroll: (e: number) => void;
  setEndPage: (e: boolean) => void;
}) {
  const scrollF = (e: any) => {
    setScroll(e.target.scrollTop);
  };

  const endPageF = (e: any) => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      setEndPage(true);
    } else {
      setEndPage(false);
    }
  };

  return (
    <main>
      <section
        className="container"
        onScroll={(e) => {
          scrollF(e);
          endPageF(e);
        }}
      >
        <div className="normals">
          <h1 className="texts">$TyL</h1>
        </div>
        <div className="parallax">
          <div className="background bg-1"></div>
          <h2 className="title">Drip Too Hard</h2>
        </div>

        <div className="normal">
          <h1>Drip é o estilo que fala sem palavras.</h1>
        </div>

        <div className="parallax">
          <div className="background bg-2"></div>
          <h2 className="title">I feel like I'm Gucci Mane in 2006</h2>
        </div>

        <div className="normal">
          <h1>Sua roupa é a tela, seu estilo é a pintura.</h1>
        </div>

        <div className="parallax">
          <div className="background bg-3"></div>
          <h2 className="title">black lives matter</h2>
        </div>
      </section>
    </main>
  );
}

export default Home;
