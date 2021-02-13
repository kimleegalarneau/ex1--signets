import { Badge } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './BtnAjouterSignet.scss';

export default function BtnAjouterSignet(props) {
    return (
        <Badge className="BtnAjouterSignet">
            <button>
                <AddIcon/>
            </button>
        </Badge>
    );
}