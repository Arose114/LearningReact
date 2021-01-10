import "bootstrap/dist/css/bootstrap.css";
import ContactCard from "./ContactCard.js";
import "./index.css";

function App() {
  return (
    <div>
      <ContactCard
        imgurl="C:\Users\Roseline\Desktop\myapp\ContactCard\src\pic/kemi.jpg"
        name="Akinola Roseline Oluwakemi"
        phone="08031300348"
        gender="Female"
      />
      <ContactCard
        imgurl="C:\Users\Roseline\Desktop\myapp\ContactCard\src\pic/sunday.jpg"
        name="owonubi Job sunday"
        phone="08100134741"
        gender="Male"
      />
      <ContactCard
        imgurl="C:\Users\Roseline\Desktop\myapp\ContactCard\src\pic/k2.jpg"
        name="Anike sadia"
        phone="08127836840"
        gender="Female"
      />
    </div>
  );
}

export default App;
