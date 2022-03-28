import styles from './Signin.module.css';
import logo from '../../images/logo_com_fundo.svg';

function Signin() {

    function registrar(e) {
        e.preventDefault();
    } 

    return (
        <div className={styles.corpo}>
            <form onSubmit={registrar}>
                <img src={logo} alt="Logo EloGroup" />
                <div>
                    <label>Usuário:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" />
                </div>
                <div>
                    <label>Confirmar Senha:</label>
                    <input type="password" />
                </div>
                <button>Registrar</button>
            </form>
        </div>
    )
}

export default Signin;