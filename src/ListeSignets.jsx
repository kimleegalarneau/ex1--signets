import './ListeSignets.scss';
import Signet from './Signet';
import tabSignet from './data/signets.json';

export default function ListeProduits(props) {
    return (
        <div className="ListeSignets">
        <ul>
        {tabSignet.map(signet => 
        <Signet key={signet.id} titre={signet.titre} dateModification={"Modifié : " + signet.dateModification} couleur={signet.couleur} id={signet.id}/>  
        )}
        </ul>
        </div>
    );
}