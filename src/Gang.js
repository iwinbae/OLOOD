import "./App.css";
import duy from "./images/duy.png";
import an from "./images/an.png";
import fok from "./images/fok.png";
import bok from "./images/bok.png";
import king from "./images/king.png";

function Members({ name, pic }) {
  return (
    <div className="gang-box">
      <p className="name">{name}</p>
      <img className="member-pic" src={pic}></img>
    </div>
  );
}

function Gang() {
  return (
    <div className="gang-box">
      <Members name="Duy" pic={duy} />
      <Members name="An" pic={an} />
      <Members name="Foko" pic={fok} />
      <Members name="Boko" pic={bok} />
      <p className="name">Chú Nhà</p>
      <img className="king-pic" src={king}></img>
    </div>
  );
}

export default Gang;
