import { IonContent, IonHeader, IonPage, IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home = () => {
  return (
    <IonPage>
      <IonContent className='ion-content-img'>
        <IonHeader collapse="condense">
        </IonHeader>
        <ExploreContainer />
       <h1 id='txt'><b> Welcome to Readers Icon</b></h1>
       <h3 id='txt1'><b>Knowledge is power</b></h3>
       <IonButton expand="full" routerLink='/signup' shape="round" id="btn" color='biscuit'>Sign Up</IonButton>
       <IonButton expand="full" routerLink='/login' shape="round" id="btn1" color="biscuit">Sign In</IonButton>
    
      </IonContent>
    </IonPage>
  );
};

export default Home;
