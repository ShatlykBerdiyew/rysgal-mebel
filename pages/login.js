import Router from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoginUser } from "../store/asyncActions/asyncLoginUser";
import { asyncRegisterUserAfterVerify } from "../store/asyncActions/asyncRegisterAfterVerify";
import { asyncRegisterUser } from "../store/asyncActions/asyncRegisterUser";
import { asyncSmsResent } from "../store/asyncActions/asyncSmsResent";
import { asyncSmsVerify } from "../store/asyncActions/asyncSmsVerify";
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
            username: userData.username.slice(-8),
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
        console.log('registrasiya zapros', userData.username.slice(-8))
        dispatch(asyncRegisterUser({
          mobile: userData.username.slice(-8),
          // password: userData.passowrd,
        }));
      } else {
        alert("parolynyzda yalnyshlyk bar");
      }
    }
  };

  const [verifyCode, setVerifyCode] = useState('');

  console.log(user.is_sms_verify)

  const handeVerify = () => {
    dispatch(asyncSmsVerify({
      mobile: userData.username.slice(-8),
      sms_code: Number(verifyCode)
    }))
  }

useEffect(() => {
  if(user.is_sms_verify === 'error'){
    dispatch(asyncSmsResent({
      mobile: userData.username.slice(-8)
    }))
  }
  if(user.is_sms_verify === 'success'){
    console.log('registrasiya bashlady')
    dispatch(asyncRegisterUserAfterVerify({
      username: userData.username.slice(-8),
      password: userData.passowrd
    }))
  }
}, [user.is_sms_verify])


  return (
    <div className={styles.login}>
      {user.is_sms_sent ? 
      <div className={styles.login__container}>
        <div style={{display:'flex', flexDirection:'column', padding: '0.5rem 2rem'}}>
        <p style={{fontSize: '18px', fontWeight:'600', padding:'0', margin:'0'}}>gelen sms cody yazyn</p>
        <input type="text" value={verifyCode} onChange={(e) => setVerifyCode(e.target.value)} />
        <button onClick={handeVerify}>ugratmak</button>
        <p style={{padding:'0', margin:'0'}}>Tazeden sms ugratmak</p>
        </div>

      </div> : 
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
                    type="password"
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
                <span style={{cursor:'pointer'}} onClick={() => setAuth(false)}>Registrasiya</span> basyn!
              </div>
            ) : (
              <div className={styles.desc}>
                Eger registrasiya bolan boslanyz onda{" "}
                <span onClick={() => setAuth(true)}>Login</span> basyn!
              </div>
            )}
          </div>
      }

    </div>
  );
}
