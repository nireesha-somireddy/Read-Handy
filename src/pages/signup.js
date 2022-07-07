import { IonContent, IonHeader, IonPage, useIonAlert, useIonToast, IonInput,IonGrid,IonRow, IonCol, IonButton, IonCard, IonLabel, useIonRouter} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useState, useEffect } from "react";

import firebase from 'firebase/compat/app';
import { Link } from "react-router-dom";
import './signup.css';
import { toastController,  } from "@ionic/core";


const presentAlert= async (err) => {
  const toast = await toastController.create({
    color: "light",
    position: "top",
    duration: 3000,
    message: err,
    translucent: false,
    showCloseButton: true,
  });

  await toast.present();

};

const Signup = () => {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [PassswordError, setPasswordError] = useState('');
  const [mobileError, setmobileError] = useState('');
  const [present]=useIonToast();
  // const [hasAccount, setHasAccount] = useState(false);
  let router = useIonRouter();

  const clearInputs = () => {
    setName('');
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
      buttons:["OK"],
      backdropDismiss:true,
      transculent:true,
      animated:true,
      cssClass:"lp-alert",
      position: "top",
      color: "light",
    });
  };


  const handleSignup=()=>{
    clearErrors();
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => { router.push("/login") }).then(() => {

      handleToast(" Account successfully Created");

    })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":

            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          case "auth/phone-number-already-exists":
            setmobileError(err.msg);
            break;
          }

        },  );

        clearInputs();
    };
    
  return (
    <IonPage>
      <IonContent color='dark' >
        <IonHeader collapse="condense">
        </IonHeader>
        <ExploreContainer />
        <IonGrid>
          <IonRow>
            <h1 id='crt-new-acc'><b> Create new account</b></h1>
           </IonRow>
           <IonRow className='input-user'>
              <IonInput class="input" type="text" value={name}  placeholder="Full Name" onIonChange={(e) => setName(e.detail.value)} />
          </IonRow>
          <IonRow className='input-user'>
          <IonInput class="input" value={email} placeholder="Email address" onIonChange={(e) => setEmail(e.detail.value)} />
          <IonLabel className="errorMsg">{emailError}</IonLabel>
          </IonRow>
          <IonRow className='input-user'>
          <IonInput class="input" type="password" placeholder="password" value={password} onIonChange={(e) => setPassword(e.detail.value)} />
          <IonLabel className="errorMsg">{PassswordError}</IonLabel>
           </IonRow>
           <IonRow >
          <IonButton onClick={handleSignup} color='danger'  id='create'> Create Account</IonButton><br />
          </IonRow>
          <IonRow>
          <IonLabel className='account' >Have an account?&nbsp; <Link to='/login'>Sign In </Link></IonLabel>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
