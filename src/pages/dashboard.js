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
import { firebaseApp } from "C:/Users/SomireddyNireesha/figmadesignapp/readhandy/src/firebase.js";
import "./dashboard.css";
import React, { useState, useEffect } from 'react';
import { db } from "C:/Users/SomireddyNireesha/figmadesignapp/readhandy/src/firebase.js";
import { collection, getDocs, addDoc,auth} from "firebase/firestore";
const Dashboard = () => {
  const [article, setarticles] = useState([]);
  const articlesRef = collection(db, "data");
  const [data, setData] = useState('');
  const [isInfiniteDisabled, setInfiniteDisabled] = useState('false');
  const [userId, setUserId] = useState();

  // auth.onAuthStateChanged((user) => {
  //   setUserId(user.uid);
  // });
  //  const tech = (avatar, name, image, text) => {
  //   const techref = collection(db, "Users", userId, "Tech");
  //   addDoc(techref, {
  //     avatar: avatar,
  //     name: name,
  //     image: image,
  //     text: text,
  //   });
  // };

  const pushData = () => {
    const max = data.length + 20;
    const min = max - 20;
    const newData = [];
    for (let i = min; i < max; i++) {
      newData.push('Item' + i);
    }
    setData([
      ...data,
      ...newData
    ]);
  }
  const loadData = (ev) => {
    setTimeout(() => {
      pushData();
      console.log('Loaded data');
      ev.target.complete();
      if (data.length === 1000) {
        setInfiniteDisabled(true);
      }
    }, 500);
  }
  useIonViewWillEnter(() => {
    pushData();
  });
  let router = useIonRouter();
  const [present] = useIonToast();
  const handleToast = (err) => {
    present({
      message: err,
      position: "top",
      animated: true,
      duration: 2000,
      color: "dark",
      model: "ios",
      icon: alert,
    })
  }
  const handleLogout = () => {
    firebaseApp.auth().signOut().then(() => {
      router.push('/home');
    }).then(() => {
      handleToast("Logout successfully");
    });
  };
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
            <IonCol> <IonButton fill='clear' color="light" href="/tech">Tech</IonButton></IonCol>
            <IonCol> <IonButton fill='clear' color="light" href="/fashion">Fashion</IonButton> </IonCol>
            <IonCol> <IonButton fill='clear' color="light" href="/tech">Sports</IonButton></IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
      <IonContent color='dark'>
        <IonGrid>
          {article.map((data) => {
            return (
              <IonCard  routerlink="/tech">
                <IonRow key={data.id}>
                  <IonCol className="avatar-img" size="4">
                    <IonAvatar >
                    <IonImg src={data.avatar} /></IonAvatar>
                  </IonCol>
                  <IonCol >
                    <IonText className="text-name">
                      {data.name}
                    </IonText></IonCol>
                 
                </IonRow>
                <IonRow >
                  <IonImg src={data.image} className="image-dash-size"/>
                </IonRow>
                <IonRow className="text-dash">
                  <IonText className="sub-text">{data.text}</IonText>
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
        <IonInfiniteScroll
          onIonInfinite={loadData}
          threshold="100px"
          disabled={isInfiniteDisabled}
        >
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Loading more data..."
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
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

export default Dashboard;
