import { IonContent, IonHeader, IonPage, IonButton, IonGrid,IonImg,useIonLoading, IonCard, IonRow, IonCol} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import './Home.css';

const Home = () => {

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
       <IonButton  routerLink='/login'  id="btn1" color="danger" align='center'>Get Started</IonButton>
       </IonRow>
       </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
