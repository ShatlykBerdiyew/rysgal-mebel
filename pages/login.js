import { useState } from "react";
import styles from "../styles/login.module.css";

export default function Login() {
  const [auth, setAuth] = useState(true);

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__title}>
          {auth ? "SING IN" : "SING UP"}
        </div>
        <div className={styles.login__form}>
          <label htmlFor="phone_number">Telefon belgi</label>
          <input type="text" name="phone_number" />
          <label htmlFor="password">Parol</label>
          <input type="passowrd" name="password" />
          {!auth && (
            <>
              {" "}
              <label htmlFor="password">Parolynyzy gaytalan</label>
              <input type="passowrd" name="password" />
            </>
          )}
          <input type="submit" />
        </div>
        {auth ? (
          <div>
            Eger registrasiya bolmadyk boslanyz onda{" "}
            <span onClick={() => setAuth(false)}>Registrasiya</span> basyn
          </div>
        ) : (
          <div>
            Eger registrasiya bolan boslanyz onda{" "}
            <span onClick={() => setAuth(true)}>Login</span> basyn
          </div>
        )}
      </div>
    </div>
  );
}
