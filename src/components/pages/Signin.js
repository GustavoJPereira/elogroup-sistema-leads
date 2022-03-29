import styles from './Signin.module.css';
import logo from '../../images/logo_com_fundo.svg';
import { useState } from 'react';

function Signin() {

    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();
    const [confirmarSenha, setConfirmarSenha] = useState();

    function registrar(e) {
        e.preventDefault();

        if (senha !== undefined && senha.length >= 8) {
            if (senha === confirmarSenha) {
                if (usuario !== undefined && usuario !== '') {
                    if (senha.match(/[0-9]/) !== null && senha.match(/[~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<]/) !== null &&
                        (senha.match(/[a-z]/) !== null || senha.match(/[A-Z]/) !== null)) {
                            window.redirect('/leads');
                            window.location.reload(false);
                    } else {
                        alert("A senha deve conter ao menos: um caracter especial, um caracter numérico, um caracter alfanumérico");
                    }
                } else {
                    alert("Digite o campo de usuário");
                }
            } else {
                alert("A senha e a confirmação não são iguais");
            }
        } else {
            alert("A senha deve ter no mínimo 8 caracteres");
        }


    }

    return (
        <div className={styles.corpo}>
            <form onSubmit={registrar}>
                <img src={logo} alt="Logo EloGroup" />
                <div>
                    <label>Usuário:</label>
                    <input type="text" onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" onChange={(e) => setSenha(e.target.value)} />
                </div>
                <div>
                    <label>Confirmar Senha:</label>
                    <input type="password" onChange={(e) => setConfirmarSenha(e.target.value)} />
                </div>
                <button onSubmit={(e) => registrar(e)}>Registrar</button>
            </form>
        </div>
    )
}

export default Signin;