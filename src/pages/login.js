import { IonContent, IonHeader, IonPage, IonInput, IonButton, IonCard, IonLabel, useIonRouter, IonGrid, IonRow, IonIcon, IonImg, useIonAlert, useIonToast } from '@ionic/react';
import {logoFacebook} from 'ionicons/icons';
import { Link } from "react-router-dom";
import ExploreContainer from '../components/ExploreContainer';
import firebase from 'firebase/compat/app';
import './login.css';
import { useState, useEffect } from "react";
import { signInWithGoogle, sigInWithFacebook } from '../firebase';
import { toastController } from "@ionic/core";


const Login = () => {
  const [user,setUser]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [PassswordError, setPasswordError] = useState('');
  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();
  let router = useIonRouter();

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

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
      header:"Alert",
      message: err,
      buttons:["OK"],
      backdropDismiss:true,
      transculent:true,
      animated:true,
      cssClass:"lp-alert",
    });
  };

   const handleToast = (err)=>{
  present({
   message:err,
   position:"top",
   animated:true,
   duration:2000,
   color:"dark",
   model:"ios",
   icon: alert,
  })
   }
   const handlelogin=()=>{
    clearErrors();
    if(email == null || email ===""){
      const msg = "Please enter your email";
      handleToast(msg);
    }else if (password == null || password ==="") {
      const msg = "Please enter your password";
      handleToast(msg);
    }else{
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
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
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
    }
      clearInputs();
    };



  return (
    <IonPage >
      <IonContent color='dark' >
        <IonHeader collapse="condense">
        </IonHeader>
        <ExploreContainer />
        <IonGrid>
        <IonRow>
        <IonImg src="../assets/suplogo.jpg" className='logo-cls-signin
        '>{" "}</IonImg>
        </IonRow>
          <IonRow>
           <h1 id='txt-wel-back'><b> Welcome </b></h1>
          </IonRow>
         <IonRow className='input-login'>
          <IonInput class="input" value={email}  placeholder="Enter your Email" onIonChange={(e) => setEmail(e.detail.value)} />
          <IonLabel className="errorMsg"> {emailError}</IonLabel>
          </IonRow>
          <IonRow className='input-login'>
          <IonInput class="input1" type="password" value={password}  placeholder="password" onIonChange={(e) => setPassword(e.detail.value)} />
          <IonLabel className="errorMsg"> {PassswordError}</IonLabel>
          </IonRow>
          <IonRow id='text2'>
          <p>Forgot Password?</p>
          </IonRow>
          <IonRow>
          <IonButton expand="full" color='danger' id='signin' onClick={handlelogin} >sign In</IonButton><br/>
          </IonRow>
          <IonRow>
           <IonLabel id='text'>If you are new? &nbsp;<Link to='/signup'>Sign Up</Link></IonLabel>
           </IonRow>
        
          <IonRow>
          <p id='txt2'>----Or sign in with----</p>
          </IonRow>
          
          <IonRow>
        <IonIcon icon={logoFacebook}> </IonIcon>
       
          </IonRow>
        
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
