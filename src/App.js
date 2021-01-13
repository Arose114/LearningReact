import "bootstrap/dist/css/bootstrap.css";
import ContactCard from "./ContactCard.js";
import "./index.css";
import kemi from "./kemi.jpg";
import sunday from "./sunday.jpg";
import k2 from "./k2.jpg";

function App() {
  return (
    <div className="contact">
      <h5 className="info">Contact Infos</h5>
      <ContactCard
        imgurl={kemi}
        name="Akinola Roseline Oluwakemi"
        phone="08031300348"
        gender="Female"
      />
      <ContactCard
        imgurl={sunday}
        name="owonubi Job sunday"
        phone="08100134741"
        gender="Male"
      />
      <ContactCard
        imgurl={k2}
        name="Anike sadia"
        phone="08127836840"
        gender="Female"
      />
    </div>
  );
}

export default App;
