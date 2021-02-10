import './Entete.scss';

export default function Entete(props) {
    return (
        <header className="Entete">
            <ul className="navPrincipale">
                <li className="titre">Signets</li>
                <li className="nomUtilisateur">Kimlee Galarneau</li>
                <li><img src='avatar/avatar.jpg' className="avatar"/></li>
            </ul>
        </header>
    )
}