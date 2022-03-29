import { Link } from 'react-router-dom';
import BtnPrimario from '../buttons/BtnPrimario';
import Cell from '../Cell';
import styles from './LeadsTable.module.css';

function LeadsTable() {


    // Area de testee

    function prepararArrey(arrey, estado) {
        let arreyFinal = [];
        for (let i = 0; i < arrey.length; i++) {
            if (arrey[i].estado === estado) {
                arreyFinal[i] = arrey[i].nome;
            } else {
                arreyFinal[i] = "";
            }
        }
        console.log(arreyFinal);
        return arreyFinal;
    }


    let estado0;
    let estado1;
    let estado2;


    if (localStorage.getItem('leads') !== null) {
        estado0 = prepararArrey(JSON.parse(localStorage.getItem('leads')), 0);
        estado1 = prepararArrey(JSON.parse(localStorage.getItem('leads')), 1);
        estado2 = prepararArrey(JSON.parse(localStorage.getItem('leads')), 2);
    } else {
        estado0 = null;
        estado1 = null;
        estado2 = null;
    }

    //Fim da área de teste


    return (
        <div className={styles.corpo}><Link to={'/saveleads'} className={styles.btn_primario}>
            <div className={styles.btn_primario}><BtnPrimario texto='Novo Lead +'></BtnPrimario></div>
        </Link>

            <div className={styles.tabelas}>
                <div className={styles.coluna} id='coluna0'>
                    <div className={styles.barra_colorida_1}></div>
                    <div className={styles.th}>Cliente em Potencial</div>
                    <Cell itens={estado0}></Cell>
                </div>
                <div className={styles.coluna} id='coluna1'>
                    <div className={styles.barra_colorida_2}></div>
                    <div className={styles.th}>Dados Confirmados</div>
                    <Cell itens={estado1}></Cell>
                </div>
                <div className={styles.coluna} id='coluna2'>
                    <div className={styles.barra_colorida_3}></div>
                    <div className={styles.th}>Renião Agendada</div>
                    <Cell itens={estado2} ultima='S'></Cell>
                </div>
            </div>
        </div>
    )
}

export default LeadsTable;