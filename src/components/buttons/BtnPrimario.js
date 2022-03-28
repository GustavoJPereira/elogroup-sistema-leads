import styles from './BtnPrimario.module.css';

function BtnPrimario({texto, to}) {

    return (
        <button className={styles.btn}><p>{texto}</p> <p></p></button>
    )
}

export default BtnPrimario;