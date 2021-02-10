import './Signet.scss';

export default function Signet(props) {
    return (
    <li className="Signet">
        <img src={'img-signet/' + props.id + '.png'} alt=""/>
        <div className="info">
            <p className="nom">{props.nom}</p>
            <p className="prix">{props.dateModification}</p>
        </div>
    </li>
    );
}