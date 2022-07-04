import { IonContent, IonHeader, IonGrid,IonRow,IonCol, IonPage,IonInput, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './login.css'
const Dashboard : React.FC = () => {
    return (
      <IonPage>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
          </IonHeader>
          <ExploreContainer />
          <h1 id='txt'><b> Articles</b></h1>
            <p>Continue Reading</p>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <p>How to get started in design</p>
                    </IonCol>
                    <IonCol>
                        <p>The very next article in the list</p>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                       All
                    </IonCol>
                    <IonCol>
                        Tech
                    </IonCol>
                    <IonCol>
                        Fashion
                    </IonCol>
                    <IonCol>
                        Sports
                    </IonCol>
                    <IonCol>Politics</IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>

                    </IonCol>
                    <IonCol>
                        <h2 >Tech</h2>
                        <p>This is marketing title</p>
                       
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>

                    </IonCol>
                    <IonCol>
                        <h2>Fashion</h2>
                        <p>This is fashion title</p>
                        
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>

                    </IonCol>
                    <IonCol>
                        <h2>Sports</h2>
                        <p>This is sports title</p>
                       
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>

                    </IonCol>
                    <IonCol>
                        <h2>Politics</h2>
                        <p>This is polities title that is longer</p>
                    </IonCol>
                </IonRow>

            </IonGrid>
       
        </IonContent>
      </IonPage>
    );
  };
  
  export default Dashboard;
  