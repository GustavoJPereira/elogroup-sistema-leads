import voltar from '../../images/voltar.svg';
import { Link } from 'react-router-dom';
import styles from './BtnVoltar.module.css';

function BtnVoltar({ to }) {

    return (
        <Link to={to} className={styles.link}> <img src={voltar} alt="aaa" /> Voltar</Link>
    )
}

export default BtnVoltar;