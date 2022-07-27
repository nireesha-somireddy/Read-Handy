import {
    IonCard,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonPage,
    IonRow,
    IonToolbar,
    IonInput,
    IonButton,
    IonAvatar,
    IonImg
  
  } from "@ionic/react";
  import {
    homeSharp,
    notificationsSharp,
    personSharp,
  } from "ionicons/icons";
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
          <IonToolbar color="dark">
          <IonGrid>
          <IonCard color="dark" >
          <IonRow>
            <IonCol>
            <IonLabel >Profile Details</IonLabel></IonCol>
            <IonIcon
              icon={qrCodeOutline}
              className="icon-align"
              size="large"
            />  </IonRow>
          </IonCard>
          </IonGrid>
          </IonToolbar>
          <IonContent color="dark">
          <IonGrid>
     
           {/* <IonRow className='input-user'>
           <IonInput class="input" placeholder="Full Name"  />
          </IonRow>
          <IonRow className='input-user'>
          <IonInput class="input" placeholder="Email address"  />
          </IonRow>
          <IonRow className='input-user'>
          <IonInput class="input" type="password" placeholder="Password" />
           </IonRow>
           <IonRow className='input-user'>
          <IonInput class="input" type="password" placeholder="Mobile Number" />
           </IonRow>
           <IonRow >
          <IonButton  color='danger'  id='create'>Change</IonButton><br />
        
          </IonRow> */}
          <IonRow>
            <IonCol/>
                 <IonCol>
                        <IonRow> <IonCol>0</IonCol></IonRow>
                        <IonRow> Followers </IonRow>
                 </IonCol>
                 <IonCol> 
                  <IonRow>
          <IonAvatar>
            <IonImg  src="./assets/technology.jpg" > </IonImg>
          </IonAvatar>  </IonRow> 
          <IonRow><IonLabel> User Name</IonLabel>  </IonRow>
          </IonCol>
                 <IonCol>
                 <IonRow> <IonCol>0</IonCol></IonRow>
                         <IonRow>Following</IonRow> </IonCol>
                 <IonCol/>  
          </IonRow>
          <IonRow>
            <IonButton fill='clear'>  Edit profile  </IonButton>
          </IonRow>
          <IonRow/>
          <IonCard color="dark">
          <IonRow>
              <IonCol> Posts(0) </IonCol>
              <IonCol> Likes(0)</IonCol>     
              <IonCol> BookMarked</IonCol>        
          </IonRow></IonCard>
          </IonGrid>
        </IonContent>
        <IonTabBar slot="bottom" className="tabbar-bottom" color="dark">
<IonTabButton tab="tab1" href="/dashboard">
  <IonIcon style={{ color: "white" }} icon={homeSharp} />
  <IonLabel style={{ color: "gray" }}>Home</IonLabel>
</IonTabButton>
<IonTabButton tab="tab2" href="/notification">
  <IonIcon style={{ color: "white" }} icon={notificationsSharp} />
  <IonLabel style={{ color: "gray" }} >Notification</IonLabel>
</IonTabButton>
<IonTabButton tab="tab3" href="/profile">
  <IonIcon style={{ color: "rgb(235, 69, 105)" }} icon={personSharp} />
  <IonLabel style={{ color: "white" }}>Profile</IonLabel>
</IonTabButton>
</IonTabBar>    
      </IonPage>
    );
  };
  
  export default Profile;