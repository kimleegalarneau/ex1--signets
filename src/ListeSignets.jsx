import './ListeSignets.scss';
import Signet from './Signet';
import tabSignet from './data/signets.json';

export default function ListeProduits(props) {
    return (
        <div className="ListeSignet">
        <h2>Liste des signets</h2>
        <ul>
        {tabSignet.map(signet => 
        <Signet key={signet.id} nom={signet.nom} dateModification={signet.dateModification} id={signet.id}/>  
        )}
        </ul>
        </div>
    );
}