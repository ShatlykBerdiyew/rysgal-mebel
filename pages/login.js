import Router from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoginUser } from "../store/asyncActions/asyncLoginUser";
import { asyncRegisterUser } from "../store/asyncActions/asyncRegisterUser";
import styles from "../styles/login.module.css";

export default function Login() {
  const [auth, setAuth] = useState(true);
  const [userData, setUserData] = useState({
    username: "+993",
    passowrd: "",
    conf_pasword: "",
  });

  const { user, loading } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user.token && user.token.length > 10) {
      Router.push("/profile");
    }
  }, [user.token]);

  const handleSubmit = () => {
    console.log("On registrasiya bolanmy?", auth);
    console.log("User data: ", userData);
    if (auth) {
      if (userData.passowrd.length > 4) {
        dispatch(
          asyncLoginUser({
            username: userData.username,
            password: userData.passowrd,
          })
        );
      } else {
        alert("paroly gysga yazdynyz");
      }
    } else {
      if (
        userData.passowrd === userData.conf_pasword &&
        userData.passowrd.length > 4
      ) {
        asyncRegisterUser({
          username: userData.username,
          password: userData.passowrd,
        });
      } else {
        alert("parolynyzda yalnyshlyk bar");
      }
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__title}>
          {auth ? "SING IN" : "SING UP"}
        </div>
        <div className={styles.login__form}>
          <p>Telefon belgi</p>
          <input
            type="text"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
            name="phone_number"
          />
          <p>Parol</p>
          <input
            type="password"
            name="password"
            value={userData.passowrd}
            onChange={(e) =>
              setUserData({ ...userData, passowrd: e.target.value })
            }
          />
          {!auth && (
            <>
              <p>Parolynyzy gaytalan</p>
              <input
                type="passowrd"
                name="conf_password"
                value={userData.conf_pasword}
                onChange={(e) =>
                  setUserData({ ...userData, conf_pasword: e.target.value })
                }
              />
            </>
          )}
          <button className={styles.btn} onClick={handleSubmit}>
            {loading ? "...loading" : "Gir"}
          </button>
        </div>
        {auth ? (
          <div className={styles.desc}>
            Eger registrasiya bolmadyk boslanyz onda{" "}
            <span onClick={() => setAuth(false)}>Registrasiya</span> basyn!
          </div>
        ) : (
          <div className={styles.desc}>
            Eger registrasiya bolan boslanyz onda{" "}
            <span onClick={() => setAuth(true)}>Login</span> basyn!
          </div>
        )}
      </div>
    </div>
  );
}
