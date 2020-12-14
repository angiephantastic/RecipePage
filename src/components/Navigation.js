import styles from './Navigation.module.css'

function Buttons() {
    return (
        <div>
            <input type="button" value="New Recipe" className={styles.buttons}></input>
        </div>
    )
}

export default Buttons