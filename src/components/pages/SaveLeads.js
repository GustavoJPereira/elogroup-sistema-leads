import { useState } from 'react';
import BtnPrimario from '../buttons/BtnPrimario';
import BtnVoltar from '../buttons/BtnVoltar';
import styles from './SaveLeads.module.css';

function SaveLeads() {

    function registrar(e) {
        e.preventDefault();
    }

    const [inputNome, setInputNome] = useState();
    const [inputTelefone, setInputTelefone] = useState();
    const [inputEmail, setInputEmail] = useState();

    //Checa todos os campos
    function checarTodas(e) {
        let checkboxes = document.querySelectorAll('.checkbox');
        if (e.target.checked === true) {
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = true;
            }
        } else {
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = false;
            }
        }
    }

    //Descheca a principal checkbox 
    function deschecarPrincipal() {
        let checkboxPrincipal = document.querySelector('.checkbox_principal');
        checkboxPrincipal.checked = false;
    }


    //Verifica os campo preenchidos do formulário e os salva no local storage do navegador
    function salvarLead() {
        let checkboxes = document.querySelectorAll('.checkbox');

        //Verifica a existência de arroba no e-mail;
        let verificarArroba = () => {
            if (inputEmail === undefined || inputEmail === '') {
                return false;
            } else {
                return inputEmail.includes('@');
            }
        }

        if (inputNome !== '' && inputTelefone !== '' && inputEmail !== '' && inputNome !== undefined && inputTelefone
            !== undefined && inputEmail !== undefined && verificarArroba()) {

            let leads = localStorage.getItem('leads') != null ? JSON.parse(localStorage.getItem('leads')) : [];
            let lead = {
                nome: inputNome,
                telefone: inputTelefone,
                email: inputEmail,
                oportunidades: {
                    rpa: checkboxes[0].checked,
                    produto_digital: checkboxes[1].checked,
                    analytics: checkboxes[2].checked,
                    bpm: checkboxes[3].checked
                }, 
                estado: 0
            }

            leads.push(lead);
            localStorage.setItem('leads', JSON.stringify(leads));
        } else {
            alert("Preencha corretamente todos os campos");
        }
    }

    return (
        <div className={styles.corpo}>
            <form onSubmit={registrar}>
                <div className={styles.btn_voltar}>
                    <BtnVoltar to={'/leads'}></BtnVoltar>
                </div>

                <div className={styles.dados}>
                    <div>
                        <label>Nome:</label>
                        <input type="text" onChange={(e) => setInputNome(e.target.value)} />
                    </div>
                    <div>
                        <label>Telefone:</label>
                        <input type="tel" onChange={(e) => setInputTelefone(e.target.value)} />
                    </div>
                    <div>
                        <label>E-mail:</label>
                        <input type="email" onChange={(e) => setInputEmail(e.target.value)} />
                    </div>
                </div>
                <div className={styles.tabelas}>
                    <table className={styles.oportunidades}>
                        <tr className={styles.barra_colorida}>
                            <td></td>
                        </tr>
                        <tr>
                            <th><input type="checkbox" onClick={(e) => checarTodas(e)} className="checkbox_principal" /></th>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" className="checkbox" onClick={deschecarPrincipal} /></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" className="checkbox" onClick={deschecarPrincipal} /></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" className="checkbox" onClick={deschecarPrincipal} /></td>
                        </tr>
                        <tr>
                            <td ><input type="checkbox" name="" id="" className="checkbox" onClick={deschecarPrincipal} /></td>
                        </tr>
                    </table>

                    <table className={styles.oportunidades}>
                        <tr className={styles.barra_colorida}>
                            <td></td>
                        </tr>
                        <tr className={styles.com_lista}>
                            <th className={styles.lista}>Oportunidades</th>
                        </tr>
                        <tr>
                            <td>RPA</td>
                        </tr>
                        <tr>
                            <td>Produto Digital</td>
                        </tr>
                        <tr>
                            <td>Analytics</td>
                        </tr>
                        <tr>
                            <td>BPM</td>
                        </tr>
                    </table>
                </div>
                <div className={styles.btn_primario} onClick={salvarLead}>
                    <BtnPrimario texto="Salvar" ></BtnPrimario>
                </div>
            </form>
        </div>
    )
}

export default SaveLeads;