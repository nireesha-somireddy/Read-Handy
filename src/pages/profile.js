import {
    IonButton,
    IonCard,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonImg,
    IonInput,
    IonLabel,
    IonPage,
    IonRow,
  
  } from "@ionic/react";
  import {
    qrCodeOutline,
    atOutline,
    callOutline,
    lockClosedOutline,
    calendarNumberOutline,
    informationCircleOutline,
  } from "ionicons/icons";

  const Profile = () => {
    return (
      <IonPage>
        <IonContent fullscreen className="profile-page">
          <IonCard className="chats-header" lines="none">
            <IonLabel className="profile-heading">My Profile</IonLabel>
            <IonIcon
              icon={qrCodeOutline}
              className="chats-vertical-dots"
              size="large"
              color="white"
            />
          </IonCard>
          <IonCard className="pro-pic-container">
            <IonImg src="assets/images/profile-pic.jpg" />
          </IonCard>
          <IonGrid className="profile-details">
              <IonRow className="row">
                <IonLabel className="Profile-name"></IonLabel>
                <IonImg
                  src="assets/icon/Edit.svg"
                  className="edit-icon"
                />
              </IonRow>
            <IonRow className="flex-row">
              <IonCol className="col1">
                <IonLabel className="flex-row-label">Email Address</IonLabel>
                <IonLabel className="flex-row-value">
                  <IonIcon icon={atOutline} />
               
                </IonLabel>
              </IonCol>
            </IonRow>
            <IonRow className="flex-row">
              <IonCol className="col1">
                <IonLabel className="flex-row-label">Phone Number</IonLabel>
                <IonLabel className="flex-row-value">
                  <IonIcon icon={callOutline} />
                  +91-9999999999
                </IonLabel>
              </IonCol>
            </IonRow>
            <IonRow className="flex-row">
              <IonCol className="col1">
                <IonLabel className="flex-row-label">Password</IonLabel>
                <IonLabel className="flex-row-value">
                  <IonIcon icon={lockClosedOutline} />
                  ********
                </IonLabel>
              </IonCol>
            </IonRow>
            <IonRow className="flex-row">
              <IonCol className="col1">
                <IonLabel className="flex-row-label">Date of Birth</IonLabel>
                <IonLabel className="flex-row-value">
                  <IonIcon icon={calendarNumberOutline} />
                  DD-MON-19XX
                </IonLabel>
              </IonCol>
            </IonRow>
            <IonRow className="flex-row">
              <IonCol className="col1">
                <IonLabel className="flex-row-label">About</IonLabel>
                <IonLabel className="flex-row-value">
                  <IonIcon icon={informationCircleOutline} />
                  Hi, this is about me!
                </IonLabel>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Profile;