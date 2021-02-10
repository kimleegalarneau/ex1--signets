import './Signet.scss';

export default function Signet(props) {
    return (
    <li className="Signet">
        <img src={'img-signets/' + props.id + '.png'} alt=""/>
        <div className="info">
            <p className="nom">{props.nom}</p>
            <p className="dateModification">{props.dateModification}</p>
        </div>
    </li>
    );
}