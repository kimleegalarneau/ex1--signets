import './Signet.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortRoundedIcon from '@material-ui/icons/SortRounded';

export default function Signet(props) {
    return (
    <li className="Signet">
        <button>
            <SortRoundedIcon />
        </button>
        <img src={'img-signets/' + props.id + '.png'} alt=""/>
        <div className="info">
            <p className="titre">{props.titre}</p>
            <p className="dateModification">{props.dateModification}</p>
            <button>
                <MoreVertIcon />
            </button>
        </div>
    </li>
    );
}