import './ListeSignets.scss';
import Signet from './Signet';
import tabSignet from './data/signets.json';

export default function ListeProduits(props) {
    return (
        <div className="ListeSignet">
        <ul>
        {tabSignet.map(signet => 
        <Signet key={signet.id} nom={signet.nom} dateModification={"Modifié : " + signet.dateModification} id={signet.id}/>  
        )}
        </ul>
        </div>
    );
}