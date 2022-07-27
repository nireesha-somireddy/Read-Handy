import { IonContent, IonHeader, IonPage, IonImg, useIonToast, IonInput,IonGrid,IonRow,  IonButton,  IonLabel, useIonRouter, useIonLoading} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useState, useEffect } from "react";
import { firebaseApp } from "C:/Users/SomireddyNireesha/figmadesignapp/readhandy/src/firebase.js";
import { signInWithGoogle, sigInWithFacebook } from '../firebase';
import { db } from "C:/Users/SomireddyNireesha/figmadesignapp/readhandy/src/firebase.js";
import firebase from 'firebase/compat/app';
import { Link } from "react-router-dom";
import './signup.css';
import { toastController,  } from "@ionic/core";

const Signup = () => {

  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatpassword, setRepeatPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [PassswordError, setPasswordError] = useState('');
  const [mobileError, setmobileError] = useState('');
  const [present]=useIonToast();
  const [showLoading, dismiss] = useIonLoading();
  let router = useIonRouter();

  const clearInputs = () => {
    setName('');
    setEmail('');
    setPassword('');
    setRepeatPassword('');
  }
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  const authlistener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      }
      else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authlistener();
  }, []);
  const handleToast = (err) => {
     present({
      message: err,
      backdropDismiss:true,
      transculent:true,
      animated:true,
      cssClass:"lp-alert",
      position: "top",
      color: "dark",
    });
  };

  const handleSignup=()=>{
    clearErrors();
    if(email == null || email ===""){
      const msg = "please enter your email";
      handleToast(msg);
    }else if (password == null || password ==="") {
      const msg = "please enter your password";
      handleToast(msg);
    }else if (password === repeatpassword) {
      showLoading({
        message: 'Please wait..',
        duration: 3000
      })

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password, repeatpassword)
        .then((credentials) => {
          console.log(credentials);
          db.collection("Users").doc(credentials.user.uid).set({
            Email: email,
            password: password,
          })})
        .then(() => {
          dismiss();
          router.push("/dashboard");
        })
        .then(() => {
          
          handleToast(" You have Registered successfully");
        })

      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            dismiss();
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            dismiss();
            setPasswordError(err.message);
            break;
          }

        },  );

        clearInputs();
      }
    };



  return (
    <IonPage>
      <IonContent className="ion-content-signup" >
        <IonGrid>
        <IonRow className='logo-cls'>
        <IonImg src="../assets/suplogo.jpg" ></IonImg>
        </IonRow>
          <IonRow id='crt-new-acc'>
             Create new account
           </IonRow>
           <IonRow className='input-user'>
              <IonInput class="input" type="text" value={name}  placeholder="Full Name" onIonChange={(e) => setName(e.detail.value)} />
          </IonRow>
          <IonRow className='input-user'>
          <IonInput class="input" value={email} placeholder="Email address" onIonChange={(e) => setEmail(e.detail.value)} />
          <IonLabel className="errorMsg">{emailError}</IonLabel>
          </IonRow>
          <IonRow className='input-user'>
          <IonInput class="input" type="password" placeholder="Password" value={password} onIonChange={(e) => setPassword(e.detail.value)} />
          <IonLabel className="errorMsg">{PassswordError}</IonLabel>
           </IonRow>
           <IonRow className='input-user'>
          <IonInput class="input" type="password" placeholder="Repeat password" value={repeatpassword} onIonChange={(e) => setRepeatPassword(e.detail.value)} />
          <IonLabel className="errorMsg">{PassswordError}</IonLabel>
           </IonRow>
           <IonRow >
          <IonButton onClick={handleSignup} fill='clear'  id='create'> Create Account</IonButton><br />
        
          </IonRow>
          <IonRow>
          <IonLabel className='account' >Have an account?&nbsp; <Link to='/login' id='si-link'>Sign In </Link></IonLabel>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
