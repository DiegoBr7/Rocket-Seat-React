import styles from './Header.module.css'
import logo from '../Images/ignite-logo.svg'


console.log(logo)

export function Header() {
    return (
        <header className={styles.header} >
            <img src={logo} alt="ignite-logo.svg"  />
          
        </header>
    )
}