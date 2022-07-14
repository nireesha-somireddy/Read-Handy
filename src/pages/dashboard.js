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
  useIonViewWillEnter,
  IonText,
} from "@ionic/react";
import {
  homeSharp,
  notificationsSharp,
  personSharp,
} from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import { firebaseApp } from "../firebase";
import "./dashboard.css";
import React, {useState} from 'react';
import { toastController,  } from "@ionic/core";
import data from './data'


const Dashboard = () => {
  const [data, setData] = useState('');
  const [isInfiniteDisabled, setInfiniteDisabled] = useState('false');

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
  const handleToast = (err)=>{
    present({
     message:err,
     position:"top",
     animated:true,
     duration:2000,
     color:"dark",
     model:"ios",
     icon: alert,
  
    })
  }
  const handleLogout=() =>{
      firebaseApp.auth().signOut().then(()=>{router.push('/home');
    }).then(()=>{
      handleToast("Logout successfully");
    });
    };

  return (
    <IonPage>
      
        <IonToolbar color='dark'>
        <IonGrid>
        <IonRow>

        <h1 id="article">
          <b>Article</b>
        </h1>
    </IonRow>
    <IonRow>
         <IonButton color='danger'  id='logout' onClick={handleLogout}>Log Out</IonButton>
        </IonRow>
        <IonRow>
        <p id='cr'><b>Continue Reading</b></p>
        </IonRow>
        <IonRow >
         <IonCol>
          <IonCard className="design">
            <IonImg className="dimg" src="./assets/h1.jpg">
            </IonImg>
          </IonCard>
          </IonCol>
          <IonCol>
          <IonCard className="design">
            <IonImg className="dimg" src="./assets/h1.jpg">
            </IonImg>
         
          </IonCard>
          </IonCol>
          <IonCol>
          <IonCard className="design">
            <IonImg className="dimg" src="./assets/h1.jpg">
            </IonImg>
        
          </IonCard>
          </IonCol>

        </IonRow>
          <IonRow id='bar'>
          <IonCol>All</IonCol>
            <IonCol>Tech </IonCol>
            <IonCol>Fashion </IonCol>
            <IonCol>Sports</IonCol>
            <IonCol>Politics</IonCol>
          </IonRow>
        </IonGrid>
        </IonToolbar>
        
      <IonContent color='dark'>
    
        <IonGrid>
          <IonRow>
            <IonCol size='4.5'>
            <IonCard className='cfashion'>
                <IonImg  src="./assets/technology.jpg">
              {" "}
                </IonImg>
                </IonCard>
            </IonCol>
            <IonCol >
              <h5 id='font'><b>Tech</b></h5>
              <p>This is marketing title</p>
            </IonCol>
          </IonRow>


          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg  src="./assets/fashionimg.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Fashion</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>

          <IonRow >
            <IonCol size='4.5'>
            <IonCard className='cfashion'>
                <IonImg className="simg" src="./assets/sportsimg.jpg">
              {" "}

                </IonImg>
                </IonCard>
            </IonCol>
            <IonCol>
              <h5 id='font'><b>Sports</b></h5>
              <p>This is sports title</p>
            </IonCol>
          </IonRow>
         <IonRow >
            <IonCol size='4.5'>
            <IonCard className='cfashion'>
                <IonImg className="pimg" src="./assets/politicsimg.jpg">
              {" "}

                </IonImg>
                </IonCard>
            </IonCol>
            <IonCol>
              <h5 id='font'><b>Politics</b></h5>
              <p>This is politics title</p>
            </IonCol>
          </IonRow>
            <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/artimg.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Art</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/gunimg1.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Gun Control</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/drama1.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Drama</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/nature.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Nature</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/travel.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Travel</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/mistary.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Mystery</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/miscellances.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Miscellaneous</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/business.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Business</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/music.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Music</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/food.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Food</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/history1.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>History</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Social Media</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Birth Control</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Royal</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Climent change</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Abortion</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Study</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Climate Change</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Skills</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Mafia</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Child Abuse</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Birds</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Food</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Animals</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Romantic</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Gold</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Religion</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Stories</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Self-health</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Drawings</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Health</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Events</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/pollution.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Pollution</b></h5>
              <p>This is Pollution title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Women</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Internet</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/f.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Education</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='4.5'>  
              <IonCard className='cfashion'>
                <IonImg className="fimg" src="./assets/yoga1.jpg">
              {" "}

                </IonImg>
                </IonCard></IonCol>
            <IonCol >
              <h5 id='font'><b>Yoga</b></h5>
              <p>This is fashion title</p>
            </IonCol>
          </IonRow>
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
    <IonTabBar color='dark'>
        <IonTabButton fill='clear' className='tab-color' >
          <IonIcon icon={homeSharp}/>
          <IonLabel>
               Home
          </IonLabel>
        </IonTabButton>
        <IonTabButton fill='clear' className='tab-color'>
          <IonIcon icon={notificationsSharp}>
          </IonIcon>
          <IonLabel>
               Notification
          </IonLabel>
        </IonTabButton>
        <IonTabButton fill='clear' className='tab-color' routerlink="/profile" >
          <IonIcon icon={personSharp} >
          </IonIcon>
          <IonLabel>
            Profile
          </IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default Dashboard;
