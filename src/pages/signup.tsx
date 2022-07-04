import { IonContent, IonHeader, IonPage,IonInput, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './login.css'
const signup : React.FC = () => {
    return (
      <IonPage>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
          </IonHeader>
          <ExploreContainer />
          <h1 id='txt'><b> Create new account</b></h1>
     
        <IonInput class="input" placeholder="Full Name"/> 
        <IonInput class="input" placeholder="Email address"/>
        <IonInput class="input" placeholder="Phone number"/> 
        <IonInput class="input" placeholder="password"/>
        <IonInput class="input" placeholder="Repeat Password"/> 
        <IonInput class="input1" placeholder="Create Account"/>
        <p>Have an account? Sign In</p>
        </IonContent>
      </IonPage>
    );
  };
  
  export default signup;
  