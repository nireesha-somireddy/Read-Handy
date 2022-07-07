import {
  IonContent,
  IonHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonPage,
  IonCard,
  useIonRouter,
  IonButton,
  useIonToast
} from "@ionic/react";
import { Route } from "workbox-routing";
import ExploreContainer from "../components/ExploreContainer";
import { firebaseApp } from "../firebase";
import "./dashboard.css";
import { toastController,  } from "@ionic/core";

const Dashboard = () => {
  let router = useIonRouter();
  const [present] = useIonToast();
  const handleToast = (err)=>{
    present({
     message:err,
     position:"top",
     animated:true,
     duration:2000,
     color:"light",
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
      <IonContent color='dark'>
        <IonHeader collapse="condense"></IonHeader>

        <ExploreContainer />
        <IonGrid>
          <IonRow>
        <h1 id="article">
          <b>Article</b>
        </h1>
        </IonRow>
        <IonRow>
        <p id='cr'><b>Continue Reading</b></p>
        </IonRow>
        <IonRow className="d">
         <IonCol>
          <IonCard className="design">
            <IonImg className="dimg" src="./assets/h1.jpg">
              {" "}
            </IonImg>
        
          </IonCard>
          </IonCol>
          <IonCol>
          <IonCard className="design">
            <IonImg className="limg" src="./assets/lap.jpg">
              {" "}
            </IonImg>
           
          </IonCard>
          </IonCol>
        </IonRow>
      
          <IonRow id='bar'>
          <IonCol>All</IonCol>
            <IonCol>Tech </IonCol>
            <IonCol>Fashion </IonCol>
            <IonCol>Sports</IonCol>
            <IonCol>Politics</IonCol>
          </IonRow>


          <IonRow>
            <IonCol size='4.5'>
            <IonCard className='ctech'>
                <IonImg className="timg" src="./assets/tech.jpg">
              {" "}
                </IonImg>
                </IonCard>
            </IonCol>
            <IonCol >
              <h5 id='font'><b>Tech</b></h5>
              <p>This is marketing title</p>
            </IonCol>
          </IonRow>


          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Fashion</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>

          <IonRow >
            <IonCol size='4.5'>
            <IonCard className='ctech'>
                <IonImg className="simg" src="./assets/s.jpg">
              {" "}

                </IonImg>
                </IonCard>
            </IonCol>
            <IonCol>
              <h5 id='font'><b>Sports</b></h5>
              <p>This is sports title</p>
            </IonCol>
          </IonRow>
          {/* <IonRow >
            <IonCol size='4.5'>
            <IonCard className='ctech'>
                <IonImg className="pimg" src="./assets/p.jpg">
              {" "}

                </IonImg>
                </IonCard>
            </IonCol>
            <IonCol>
              <h5 id='font'><b>Politics</b></h5>
              <p>This is politics title</p>
            </IonCol>
          </IonRow> */}
          <IonRow>
            <IonButton color='danger'  id='logout' onClick={handleLogout}>Log Out</IonButton>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
