import styles from "../styles/login.module.css";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__title}>SING IN</div>
        <div className={styles.login__form}>
          <label htmlFor="phone_number">Telefon belgi</label>
          <input type="text" name="phone_number" />
          <label htmlFor="password">Porol</label>
          <input type="passowrd" name="password" />
          <input type="" />
        </div>
      </div>
    </div>
  );
}
