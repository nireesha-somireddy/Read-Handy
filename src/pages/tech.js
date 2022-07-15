import {
    IonCard,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonImg,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonPage,
    IonRow,
    IonSearchbar,
    IonText,
    useIonViewWillEnter,
  } from "@ionic/react";
  import { cart, notifications } from "ionicons/icons";
  import "./Home.css";
  import { Data } from "../pages/techdata";
  import React,{ useState } from "react";
  
  const Tech  = () => {
  
    const [datas, setData] = useState([]);
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  
    const pushData = () => {
     
      const newData = [];
      for(let i = 0; i<12; i++){
        Data[i].id = Data[i].id + i * i;
        newData.push(Data[i]);
      }
      setData([
        ...datas,
        ...newData
      ]);
    }
  
    const loadData = (ev) => {
      console.log(Data.length);
      setTimeout(() => {
        pushData();
        console.log('Loaded data');
        ev.target.complete();
        console.log(Data.length);
        if(Data.length === 12){
          setInfiniteDisabled(Data.length < 12);
        }
      }, 5000);
    }
    useIonViewWillEnter(() => {
      pushData();
    });
    return (
      <IonPage>
        <IonContent fullscreen className="home">
          <IonGrid>
            <IonRow className="ion-justify-content-between">
              <IonCol size="6" sizeSm="2" sizeMd="4">
                <IonImg
                  src="../assets/trademark.jpg"
                  className="mark ion-padding-start"
                ></IonImg>
              </IonCol>
              <IonCol size="3" sizeSm="4" sizeMd="2">
                <IonIcon icon={notifications} className="homeicon note"></IonIcon>
                <IonIcon icon={cart} className="homeicon cart"></IonIcon>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonSearchbar></IonSearchbar>
              </IonCol>
            </IonRow>
            <IonRow>
              {Data.map((data) => {
                return (
                  <IonCol
                    key={data.id}
                    className="ion-text-center"
                    size="6"
                    sizeSm="4"
                    sizeMd="3"
                  >
                    <IonCard key={data.id}>
                      <IonImg src={data.image} className="img"></IonImg>
                      <IonText style={{ fontSize: "10px" }}>{data.title}</IonText>
                    </IonCard>
                  </IonCol>
                );
              })}
            </IonRow>
            <IonInfiniteScroll onIonInfinite={loadData} threshold="100px" disabled={isInfiniteDisabled}>
              <IonInfiniteScrollContent loadingSpinner="bubbles" loadingText="Loading more data...">
  
              </IonInfiniteScrollContent>
            </IonInfiniteScroll>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Tech;