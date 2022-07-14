import { IonContent, IonHeader, IonPage, IonButton,  useIonRouter,  useIonToast,IonGrid,IonRow,} from '@ionic/react';
import ExploreContainer from "../components/ExploreContainer";
import { firebaseApp } from "../firebase";

const profile = () => {
  let router = useIonRouter;
  const [present] = useIonToast;
  const handleToast = (err)=>{
    present({
     message:err,
     position:"top",
     animated:true,
     duration:2000,
     color:"dark",
     model:"ios",
     icon: alert,
  
    })
  }
  const handleLogout=() =>{
      firebaseApp.auth().signOut().then(()=>{router.push('/home');
    }).then(()=>{
      handleToast("Logout successfully");
    });
    };
  return (
    <IonPage>
     <IonContent color='dark' className='ion-content'>
        <IonHeader collapse="condense">
        </IonHeader>
        <IonGrid>
        <IonButton color='danger'  id='logout' onClick={handleLogout}>Log Out</IonButton>
       </IonGrid>
      </IonContent> 
    </IonPage>
  );
};

export default profile;
