import { Header } from "../../../widgets/header";
import { MainButton } from "../../../shared/ui";
import styles from './login-page.module.css';

export const Login = () => {
    return (
        <>
            <Header />
            <div className={styles.login}>
                <h1 className={styles.loginTitle}>Sign in</h1>
                <form className={styles.loginForm}>
                    <input placeholder="Login" className={styles.inputForm}/>
                    <input placeholder="Password" className={styles.inputForm}/>
                    <div className={styles.loginButton}>
                    <MainButton variant="main">Sign in</MainButton>

                    </div>
                    

                </form>

            </div>
           
        </>
    )
}