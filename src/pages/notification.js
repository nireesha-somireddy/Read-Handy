import {
    IonCard,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonTabBar,
    IonImg,
    IonTabButton,
    IonLabel,
    IonPage,
    IonRow,
    IonToolbar,
  
  } from "@ionic/react";
  import {
    homeSharp,
    notificationsSharp,
    personSharp,
    trashBin,
    trashBinSharp,
  } from "ionicons/icons";
  import {
    qrCodeOutline,
    atOutline,
    callOutline,
    lockClosedOutline,
    calendarNumberOutline,
    informationCircleOutline,
  } from "ionicons/icons";
  import "./notification.css";

  const Notification = () => {
    return (
      <IonPage className="notification-page">
        <IonToolbar className="notification-page">
        <IonGrid>
          <IonRow>
        <IonCol>
            <IonLabel className="notifi-text">Notifications</IonLabel></IonCol>
            <IonIcon
              icon={trashBinSharp}
              className='trash-icon'
            /></IonRow>
        </IonGrid>
        </IonToolbar>
        <IonContent fullscreen className="notification-page">
          <IonGrid >
           
          </IonGrid>
        </IonContent>
        <IonTabBar slot="bottom" className="tabbar-bottom">
<IonTabButton tab="tab1" href="/dashboard">
  <IonIcon style={{ color: "white" }} icon={homeSharp} />
  <IonLabel style={{ color: "gray" }}>Home</IonLabel>
</IonTabButton>
<IonTabButton tab="tab2" href="/notification">
  <IonIcon style={{ color: " rgb(235, 69, 105)" }} icon={notificationsSharp} />
  <IonLabel style={{ color: "white" }}>Notification</IonLabel>
</IonTabButton>
<IonTabButton tab="tab3" href="/profile">
  <IonIcon style={{ color: "white" }} icon={personSharp} />
  <IonLabel style={{ color: "gray" }}>Profile</IonLabel>
</IonTabButton>
</IonTabBar>    
      </IonPage>
    );
  };
  
  export default Notification;