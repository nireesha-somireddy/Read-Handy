import { IonContent, IonHeader, IonPage, IonInput, IonButton, IonCard, IonLabel,useIonRouter } from '@ionic/react';
import { Link } from "react-router-dom";
import ExploreContainer from '../components/ExploreContainer';
// import { firebase } from "../firebase";
import firebase from 'firebase/compat/app';
import './login.css';


import { useState, useEffect } from "react";
import { signInWithGoogle, sigInWithFacebook } from '../firebase';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [PassswordError, setPasswordError] = useState('');

  let router = useIonRouter();

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  const authlistener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setEmail(user);
      }
      else {
        setEmail("");
      }
    });
  };
  useEffect(() => {
    authlistener();
  }, []);

  const handlelogin = () => {
    clearErrors();

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => { router.push("/dashboard") })


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

  };

  return (
    <IonPage >
      <IonContent className='ion-content'>
        <IonHeader collapse="condense">
        </IonHeader>
        <ExploreContainer />
        <h1 id='txt'><b> Welcome back</b></h1>
        <IonCard className='card2'>
          <IonInput class="input" value={email} placeholder="Enter your Email" onIonChange={(e) => setEmail(e.detail.value)} />
          <IonLabel className="errorMsg"> {emailError}</IonLabel>
          <IonInput class="input1" type="password" placeholder="password" onIonChange={(e) => setPassword(e.detail.value)} />
          <IonLabel className="errorMsg"> {PassswordError}</IonLabel>
          <p>Forgot Password?</p>
          <IonButton expand="full"  shape="round" color='biscuit' id='signin' onClick={handlelogin} >sign In</IonButton>
          <IonLabel>Don't have an account?<Link to ='/signup'> Sign Up</Link></IonLabel>

          <p id='txt2'>----Or sign in with----</p>
          <IonButton shape="round" color='biscuit' id='btnf'>Facebook</IonButton>&nbsp; &nbsp;
          <IonButton shape="round" color="biscuit" id='btng'>Google</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
