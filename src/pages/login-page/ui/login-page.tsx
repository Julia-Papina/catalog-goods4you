import { useState } from "react";
import { Header } from "../../../widgets/header";
import { MainButton } from "../../../shared/ui";
import { useAuthUserMutation } from "../../../store/slices/api-user-slice";
import { useNavigate } from "react-router-dom";
import styles from "./login-page.module.css";
import { FC } from "react";

export const Login: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [authUser] = useAuthUserMutation();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    authUser({ username, password })
      .unwrap()
      .then((payload) => {
        localStorage.setItem('token', payload.accessToken);
        console.log('token', payload.accessToken);
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <section className={styles.login}>
        <h1 className={styles.loginTitle}>Sign in</h1>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="Login"
            className={styles.inputForm}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            className={styles.inputForm}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.loginButton}>
            <MainButton variant="main" type="submit">
              Sign in
            </MainButton>
          </div>
        </form>
      </section>
    </>
  );
};
