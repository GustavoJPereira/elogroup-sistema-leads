import styles from './Header.module.css';
import logo from '../../images/logo.svg'

function Header () {

    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="EloGroup" className={styles.logo}/>
        </header>
    );
}

export default Header;