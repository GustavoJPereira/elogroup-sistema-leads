import styles from './Cell.module.css'
import seta from '../images/seta.svg'
import { Link } from 'react-router-dom';


function Cell({ itens, ultima }) {

    function clicou(i) {

        if (itens[i] !== '') {
            let cadastros = JSON.parse(localStorage.getItem('leads'));
            console.log(cadastros[i].estado);
            cadastros[i].estado++;
            console.log(cadastros[i].estado);
            localStorage.setItem('leads', JSON.stringify(cadastros));
            window.location.reload(false);
        }

    }

    //Retira o botão de passar da ultima coluna
    function retirarOpcoes(item) {
        if (ultima === 'S' || item === '') {
            return styles.celula_sem_botao;
        } else {
            return styles.celula;
        }
    }

    return (
        <>
            {itens !== null ? (
                itens.map((item, i) => (
                    <div key={i} className={retirarOpcoes(item)} > <label></label> <p>{item}</p>  <div><Link to={'/leads'} ><img src={seta} alt='seta para a direita' onClick={() => clicou(i)} /></Link></div></div>

                ))) : (
                <div>não há clientes</div>
            )
            }
        </>
    )
}

export default Cell;