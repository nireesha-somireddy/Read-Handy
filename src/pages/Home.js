import { IonContent, IonHeader, IonPage, IonButton, IonGrid,IonImg,IonLoading, IonCard, IonRow, IonCol} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, {useState} from "react";
import './Home.css';

const Home = () => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <IonPage>
      <IonContent color='dark' className='ion-content'>
        <IonHeader collapse="condense">
        </IonHeader>
        <ExploreContainer />
        <IonGrid>
        <IonRow>
        <IonImg src="../assets/suplogo.jpg" className="homeimg">{" "}</IonImg>
        </IonRow>
        <IonRow className='title'> Read Handy </IonRow>
        <IonRow>
             <h1 className='wel'>Welcome </h1>
       </IonRow>
      <IonRow>
       <IonButton  routerLink='/login'  id="btn1" color="danger" align='center' onClick={() => setShowLoading(true)}>Get Started</IonButton>
       <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Loading...'}
        duration={1000}
      />
       </IonRow>
       </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
