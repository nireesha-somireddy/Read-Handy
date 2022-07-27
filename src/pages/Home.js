import { IonContent, IonPage, IonButton, IonGrid, IonImg, IonRow } from '@ionic/react';
import './Home.css';

const Home = () => {
  return (
    <IonPage>
      <IonContent className='ion-content'>
        <IonGrid>
          <IonRow>
            <IonImg src="../assets/suplogo.jpg" className="homeimg"></IonImg>
          </IonRow>
          <IonRow className='title'> Read Handy </IonRow>
          <IonRow className='text-edu'>
            Education is everything to learn.
          </IonRow>
          <IonRow>
            <IonButton routerLink='/login' id="btn1" fill='clear'>Get Started</IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
