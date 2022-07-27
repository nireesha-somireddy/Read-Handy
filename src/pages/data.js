import { IonContent,IonImg,IonText, IonPage,IonToolbar, IonButton, IonGrid, IonLabel, IonCol, IonIcon, IonRow, IonCard } from '@ionic/react';
import './Home.css';
import {
    ellipsisVerticalSharp,
    bookmarkSharp,
    chevronBackSharp,
    heartSharp,
    chatboxSharp
} from "ionicons/icons";
import { firebaseApp } from "C:/Users/SomireddyNireesha/figmadesignapp/readhandy/src/firebase.js";
import React, { useState, useEffect } from 'react';
import { db } from "C:/Users/SomireddyNireesha/figmadesignapp/readhandy/src/firebase.js";
import { collection, getDocs} from "firebase/firestore";




const Data = () => {
    const [article, setarticles] = useState([]);
    const articlesRef = collection(db, "data");
    const [data, setData] = useState('');
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
            <IonGrid >
                <IonCard color='dark'>
                    <IonRow> <IonCol >
                        <IonButton fill='clear'  >
                            <IonIcon icon={chevronBackSharp}>
                            </IonIcon></IonButton>
                    </IonCol>
                        <IonCol>
                            <IonLabel> Poem </IonLabel></IonCol>

                        <IonCol >
                            <IonButton fill='clear' >
                                <IonIcon icon={bookmarkSharp}>
                                </IonIcon></IonButton>
                        </IonCol>
                        <IonCol >
                            <IonButton fill='clear' >
                                <IonIcon icon={ellipsisVerticalSharp}>
                                </IonIcon></IonButton>
                        </IonCol> </IonRow>
                </IonCard>
            </IonGrid>
    </IonToolbar>
            <IonContent className='ion-content'>
                <IonGrid>
                    <IonRow>
                    <IonCard>
                  <IonImg src={data.image} /></IonCard>
                </IonRow>
                <IonRow className="text-dash">
                  <IonText className="sub-text">{data.text}</IonText>
                </IonRow>
                <IonRow className="like-comm-row">
                  <IonCol >
                  <IonIcon style={{ color: "gray" }} icon={heartSharp}>
                  </IonIcon>
                  <IonLabel> 0 Likes</IonLabel></IonCol>
                  <IonCol>
                  <IonIcon style={{ color: "gray" }} icon={chatboxSharp}>
                  </IonIcon><IonLabel> 0 Comments</IonLabel></IonCol>
                </IonRow>
             </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Data;
