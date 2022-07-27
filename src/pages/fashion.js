import {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonPage,
    IonCard,
    useIonRouter,
    IonButton,
    useIonToast,
    IonTabBar,
    IonLabel,
    IonIcon,
    IonTabButton,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonToolbar,
    useIonViewWillEnter, IonText, IonAvatar
  } from "@ionic/react";
  import {
    chatboxSharp,
    ellipsisVerticalSharp,
    heartDislikeCircle,
    heartSharp,
    homeSharp,
    notificationsSharp,
    personSharp,
  } from "ionicons/icons";
  import { data } from "./data";
  import { firebaseApp } from "C:/Users/SomireddyNireesha/figmadesignapp/readhandy/src/firebase.js";
  import React, { useState, useEffect } from 'react';
  import { db } from "C:/Users/SomireddyNireesha/figmadesignapp/readhandy/src/firebase.js";
  import { collection, getDocs, addDoc,auth} from "firebase/firestore";
  const Fashion= () => {
    const [article, setarticles] = useState([]);
    const articlesRef = collection(db, "tech");
    const [data, setData] = useState('');
    const [isInfiniteDisabled, setInfiniteDisabled] = useState('false');
    const [userId, setUserId] = useState();
    useEffect(() => {
      getDocs(articlesRef)
        .then((snapshot) => {
          let articles = []
          snapshot.docs.forEach((doc) => {
            articles.push({ ...doc.data(), id: doc.id })
          })
          console.log(articles)
          setarticles(articles);
        })
    },[]);
  
    return (
      <IonPage>
        <IonToolbar color='dark'>
          <IonGrid>
            <IonRow >
              <IonCol id="article">Read Handy</IonCol>
            </IonRow>
          
            <IonRow id='bar'>
              <IonCol>
                <IonButton fill='clear' color="light" href="/data">All</IonButton></IonCol>
              <IonCol> <IonButton  fill='clear' color="light"  href="/tech">Tech</IonButton></IonCol>
              <IonCol> <IonButton color="danger" >Fashion</IonButton> </IonCol>
              <IonCol> <IonButton fill='clear' color="light" href="/sports">Sports</IonButton></IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
        <IonContent color='dark'>
          <IonGrid>
          {article.map((tech) => {
              return (
                <IonCard  routerlink="/tech">
                  <IonRow key={tech.id}>
                    <IonCol className="avatar-img" size="4">
                      <IonAvatar >
                      <IonImg src={tech.avatar} /></IonAvatar>
                    </IonCol>
                    <IonCol >
                      <IonText className="text-name">
                        {tech.name}
                      </IonText></IonCol>
                  </IonRow>
                  <IonRow >
                    <IonImg src={data.image} className="image-dash-size"/>
                  </IonRow>
                  <IonRow className="text-dash">
                    <IonText className="sub-text">{tech.text}</IonText>
                  </IonRow>
                  <IonRow className="like-comm-row">
                    <IonCol >
                    <IonIcon style={{ color: "gray" }} icon={heartDislikeCircle}>
                    </IonIcon>
                    <IonLabel> 0 Likes</IonLabel></IonCol>
                    <IonCol>
                    <IonIcon style={{ color: "gray" }} icon={chatboxSharp}>
                    </IonIcon><IonLabel> 0 Comments</IonLabel></IonCol>
                  </IonRow>
                </IonCard>
              )
            })}
  
          </IonGrid>
        </IonContent>
        <IonTabBar slot="bottom" className="tabbar-bottom">
          <IonTabButton tab="tab1" href="/dashboard">
            <IonIcon style={{ color: "rgb(235, 69, 105)" }} icon={homeSharp} />
            <IonLabel style={{ color: "white" }}>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/notification">
            <IonIcon style={{ color: "white" }} icon={notificationsSharp} />
            <IonLabel style={{ color: "gray" }}>Notification</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/profile">
            <IonIcon style={{ color: "white" }} icon={personSharp} />
            <IonLabel style={{ color: "gray" }}>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonPage>
    );
  };
  
  export default Fashion;