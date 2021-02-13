import './Appli.scss';
import Entete from './Entete.jsx';
import ListeSignets from './ListeSignets';
import BtnAjouterSignet from './BtnAjouterSignet';

export default function Appli() {
  return (
    <div className="Appli">
      <Entete />
      <section className="contenuPrincipal">
        <ListeSignets />
        <BtnAjouterSignet />
      </section>
    </div>
  );
}
