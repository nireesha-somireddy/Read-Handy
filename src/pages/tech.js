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
  useIonViewWillEnter,
  IonToolbar
} from "@ionic/react";
import { cart, notifications } from "ionicons/icons";
import "./Home.css";
import "./tech.css"
import { Data } from "../pages/techdata";
import { useState } from "react";
import { LazyLoadImage } from "@dcasia/react-lazy-load-image-component-improved";
import 'react-lazy-load-image-component/src/effects/blur.css';
const Tech = () => {

  const [datas, setData] = useState([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);

  const pushData = () => {
    const max = datas.length + 4;
    const min = max - 4;
    const newData = [];

    if (datas.length === 30) {
      setInfiniteDisabled(true);
    } else {
      for (let i = min; i < max; i++) {
        Data[i].id = Data[i].id + i * i;
        newData.push(Data[i]);
      }

      setData([
        ...datas,
        ...newData
      ]);
    }
  }
  const loadData = (ev) => {
    console.log(datas.length);
    setTimeout(() => {
      pushData();
      console.log('Loaded data');
      ev.target.complete();
      if (datas.length === 30) {
        setInfiniteDisabled(true);
      }
    }, 2000);
  }
  useIonViewWillEnter(() => {
    pushData();
  });
  return (
    <IonPage>
      <IonToolbar color='dark'>
        <IonGrid>
          <IonRow className="ion-justify-content-between">
            <IonCol size="6" sizeSm="2" sizeMd="4">
              <IonImg src="../assets/suplogo.jpg" className='img-logo'>{" "}</IonImg>
            </IonCol>
            <IonCol size="3" sizeSm="4" sizeMd="2">
              <IonIcon icon={notifications} className="homeicon note"></IonIcon>
              <IonIcon icon={cart} className="homeicon cart"></IonIcon>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
      <IonContent fullscreen className="home" color='dark'>
        <IonGrid>
          <IonRow>
            For you
          </IonRow>
          {datas.map((data) => {
            return (
              <IonRow
                key={data.id}
              >
                <IonCard className='card-size ion-margin'>
                  <IonRow >
                    <LazyLoadImage src={data.image} effect="blur" delayTime={300} placeholderSrc={process.env.PUBLIC_URL + "/assets/suplogo.jpg"} style={{ margin: "auto" }} />
                  </IonRow>
                  <IonRow className="title-content">{data.Title}
                  </IonRow>
                  <IonRow>{data.Article}
                  </IonRow>
                </IonCard>
              </IonRow>
            );
          })}

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