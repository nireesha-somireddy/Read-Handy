import { IonContent, IonHeader, IonPage,IonInput, IonButton,IonCard,IonLabel, useIonRouter} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useState,useEffect } from "react";
// import { firebase} from "../firebase";
import firebase from 'firebase/compat/app';
import { Link } from "react-router-dom";
import './login.css';
import './signup.css';
const Signup = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [PassswordError, setPasswordError] = useState('');

  // const [hasAccount, setHasAccount] = useState(false);
  let router = useIonRouter();
   
  const clearInputs = () => {
    setEmail('');
    setPassword('');
    setconfirmPassword('');
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
  const handleSignup = () => {
    clearErrors();
    firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{router.push("/dashboard")})
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":

            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  }
    return (
      <IonPage>
        <IonContent className='ion-content'>
          <IonHeader collapse="condense">
          </IonHeader>
          <ExploreContainer />
          <h1 id='txt'><b> Create new account</b></h1>
       <IonCard className='card'>
        <IonInput class="input" type="text" value={user} placeholder="Full Name" onIonChange={(e) => setUser(e.detail.value)}/> 
        <IonInput class="input" value={email} placeholder="Email address" onIonChange={(e) => setEmail(e.detail.value)}/>
        <IonLabel className="errorMsg">{emailError}</IonLabel>
        <IonInput class="input" type="number" value={user} placeholder="Phone number"/> 
        <IonInput class="input" type="password" placeholder="password" value={password} onIonChange={(e) => setPassword(e.detail.value)}/>
        <IonLabel className="errorMsg">{PassswordError}</IonLabel>
        <IonInput class="input"  type="password" placeholder="Repeat Password"/> 
       <IonButton expand='full' onClick={handleSignup} color='biscuit' shape='round'  id='create'> Create Account</IonButton>
        <IonLabel id='text'>Have an account? <Link to='/loginpage'>Sign In </Link></IonLabel>
        </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Signup;
  