import { IonContent, IonPage, IonInput, IonButton, IonLabel, useIonRouter, IonGrid, IonRow, IonIcon, IonImg, useIonAlert, useIonToast, useIonLoading } from '@ionic/react';
import { logoFacebook, logoGoogle } from 'ionicons/icons';
import { Link } from "react-router-dom";
import ExploreContainer from '../components/ExploreContainer';
import firebase from 'firebase/compat/app';
import './login.css';
import { useState, useEffect } from "react";

const Login = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [PassswordError, setPasswordError] = useState('');
  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();
  const [showLoading, dismiss] = useIonLoading();

  let router = useIonRouter();
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  // const signInGoogle = async () => {
  //   GoogleAuth.initialize();
  //   const result = await GoogleAuth.signIn();

  //   console.log(result);
  //   if (result) {
  //     router.push("/tabs","forword");
  //     console.log(result);
  //   }

  // }

  const authlistener = () => {
    firebase.auth().onAuthStateChanged((email) => {
      if (email) {
        setEmail(email);
        clearInputs();

      }
      else {
        setEmail("");
      }
    });
  };
  useEffect(() => {
    authlistener();
  }, []);

  const handleAlert = (err) => {
    presentAlert({
      header: "Alert",
      message: err,
      buttons: ["OK"],
      backdropDismiss: true,
      transculent: true,
      animated: true,
      cssClass: "lp-alert",
    });
  };

  const handleToast = (err) => {
    present({
      message: err,
      position: "top",
      animated: true,
      duration: 2000,
      color: "dark",
      model: "ios",
      icon: alert,
    })
  }
  const handlelogin = () => {
    clearErrors();
    if (email == null || email === "") {
      const msg = "Please enter your email";
      handleToast(msg);
    } else if (password == null || password === "") {
      const msg = "Please enter your password";
      handleToast(msg);
    } else {
      showLoading({
        message: 'Please wait..',
        duration: 3000
      })

      firebase
        .auth()

        .signInWithEmailAndPassword(email, password)
        .then(() => {
          dismiss();
          router.push("/dashboard");
        })
        .then(() => {
          handleToast(" You have login successfully");
        })

        .catch((err) => {
          switch (err.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              dismiss();
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              dismiss();
              setPasswordError(err.message);
              break;

          }
        });
    }
    clearInputs();
  };

  return (
    <IonPage >
      <IonContent className="content-page-login" >
        <IonGrid>
          <IonRow className='logo-cls-signin'>
            <IonImg src="../assets/suplogo.jpg" ></IonImg>
          </IonRow>
          <IonRow id='txt-wel-back'>Welcome </IonRow>
          <IonRow className='input-login'>
            <IonInput class="input" value={email} placeholder="Enter your Email" onIonChange={(e) => setEmail(e.detail.value)} />
            <IonLabel className="errorMsg"> {emailError}</IonLabel>
          </IonRow>
          <IonRow className='input-login'>
            <IonInput class="input1" type="password" value={password} placeholder="password" onIonChange={(e) => setPassword(e.detail.value)} />
            <IonLabel className="errorMsg"> {PassswordError}</IonLabel>
          </IonRow>
          <IonRow >
           <IonLabel className='text2'>Forgot Password?</IonLabel> 
          </IonRow>
          <IonRow>
            <IonButton fill='clear' id='signin' onClick={handlelogin} >sign In</IonButton><br />
          </IonRow>
          <IonRow>
            <IonLabel id='text'>If you are new? &nbsp;<Link id='si-in-link' onClick={clearInputs} to='/signup'>Sign Up</Link></IonLabel>
          </IonRow>
          <IonRow id='txt2'>
             ----Or sign in with----
          </IonRow>
          <IonRow>
            <IonButton fill='clear'  className="g-btn">
              <IonIcon icon={logoGoogle} id='icon-g'> </IonIcon>
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
