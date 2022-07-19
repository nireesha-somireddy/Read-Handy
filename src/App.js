// import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact,useIonAlert,useIonToast,isPlatform} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import Tech from './pages/tech';
import techdata from './pages/techdata';
// import { AuthContextProvider } from "./context/AuthContext";



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { App as app } from "@capacitor/app";
import { Browser } from "@capacitor/browser";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, setDoc} from "firebase/firestore"; 
//import { db } from './firebase';
 import { db } from "C:/Users/SomireddyNireesha/figmadesignapp/readhandy/src/firebase.js";
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
setupIonicReact();
const App = () => {
  const [updateDetails, setUpdateDetails] = useState({});
  const [appVersion, setAppVersion] = useState("");
  const updateRef = doc(db,"Readhandy_app_config","fMYHFpvElK8oMFbLVbJE");

  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();
  const handleToast = (msg) => {
    present({
      message: msg,
      position: "top",
      animated: true,
      duration: 2000,
      color: "dark3",
      mode: "ios",
    });
  };
  const handleAlert = (msg, title, btn, appVersion) => {
    presentAlert({
      header: title,
      subHeader: `Version: ${appVersion}`,
      message: msg,
      buttons: [
        {
          text: btn,
          role: "Download",
          handler: async () => {
            handleToast("Download Clicked");
            await Browser.open({
               url: "https://play.google.com/store/apps/details?id=com.readhandy.app",
            });
          },
        },
      ],
      backdropDismiss: true,
      translucent: true,
      animated: true,
      cssClass: "lp-sp-alert",
    });
  };

  const getAppInfo = async () => {
    let info = await app.getInfo();
    return info;
  };

  const getConfigData = async () => {
    const docSnap = await getDoc(updateRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("Document data:", docSnap.data());
      setUpdateDetails(data.updateMsg);
      setAppVersion(data.current);
    } else {
      console.log("No such document!");
    }
  };

  const checkUpdate = async () => {
    try {
      if (isPlatform("android")) {
        const currentAppInfo = getAppInfo();
        if (appVersion > (await currentAppInfo).version) {
          const msg = updateDetails.msg;
          const title = updateDetails.title;
          const btn = updateDetails.btn;
          handleAlert(msg, title, btn, appVersion);
        }
      } 
    } 
  
    catch (error) {
    }
  };

  useEffect(() => {
    getConfigData();
    getAppInfo();
    if (isPlatform("android")){
    }
  }, []);

    checkUpdate();

    return(
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/tech">
          <Tech />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
       
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
   );
    }
   
export default App;
