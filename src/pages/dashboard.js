import {
  IonContent,
  IonHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonPage,
  IonCard,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <IonPage>
      <IonContent className='ion-content'>
        <IonHeader collapse="condense"></IonHeader>
        <ExploreContainer />
        <h1 id="txt">
          <b>Article</b>
        </h1>
        <p id='cr'><b>Continue Reading</b></p>
        <div className="d">
          <IonCard className="design">
            <IonImg className="dimg" src="./assets/design.jpg">
              {" "}
            </IonImg>
            <p>How to get started in design</p>
          </IonCard>
          <IonCard className="design">
            <IonImg className="limg" src="./assets/lap.jpg">
              {" "}
            </IonImg>
            <p>The very next article in the list</p>
          </IonCard>
        </div>
        <IonGrid>
          <IonRow>
          <IonCol size='1.3'>All</IonCol>
            <IonCol size='2.3'>Tech </IonCol>
            <IonCol size='3'>Fashion </IonCol>
            <IonCol>Sports</IonCol>
            <IonCol>Politics</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonCard className='ctech'>
                <IonImg className="timg" src="./assets/tech.jpg">
              {" "}
                </IonImg>
                </IonCard>
            </IonCol>
            <IonCol size='6'>
              <h5 id='font'><b>Tech</b></h5>
              <p>This is marketing title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>  <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol size='6'>
              <h5 id='font'><b>Fashion</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol >
            <IonCard className='ctech'>
                <IonImg className="simg" src="./assets/s.jpg">
              {" "}

                </IonImg>
                </IonCard>
            </IonCol>
            <IonCol size='6'>
              <h5 id='font'><b>Sports</b></h5>
              <p>This is sports title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='6'>
                <IonCard className='ctech' >
                <IonImg className="psimg" src="./assets/p.jpg">
              {" "}

                </IonImg>
                </IonCard>
            </IonCol>
            <IonCol size='6'>
              <h5 id='font'><b>Politics</b></h5>
              <p>This is polities title that is longer</p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
