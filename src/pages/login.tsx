import { IonContent, IonHeader, IonPage, IonInput, IonButton, IonCard} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './login.css';


const Login: React.FC = () => {
  return (
    <IonPage >
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <ExploreContainer />
       <h1 id='txt'><b> Welcome back</b></h1>
       <IonCard>
        <IonInput class="input" placeholder="Enter your Email"/> 
        <IonInput class="input1" placeholder="password"/>
      
        <p>Forgot Password?</p>
       <IonButton expand="full" href='dashboard' shape="round" color='biscuit' id='signin'>sign In</IonButton>
        <p>Don't have an account?Sign Up</p>

        <p>----Or sign in with----</p>
       <IonButton  shape="round" color='biscuit' id='btnf'>Facebook</IonButton>&nbsp; &nbsp;
       <IonButton  shape="round"color="biscuit" id='btng'>Google</IonButton>
       </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
