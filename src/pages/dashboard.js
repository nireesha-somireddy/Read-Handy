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
} from "@ionic/react";
import {
  homeSharp,
  notificationsSharp,
  personSharp,
} from "ionicons/icons";

import { firebaseApp } from "../firebase";
import "./dashboard.css";
import React, {useState} from 'react';

import { Link } from "react-router-dom";

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
          <b>Read Handy</b>
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
            <IonImg className="dimg" src="./assets/sportsimg.jpg">
            </IonImg>
          </IonCard>
          </IonCol>
          <IonCol>
          <IonCard className="design">
            <IonImg className="dimg" src="./assets/food.jpg">
            </IonImg>
         
          </IonCard>
          </IonCol>
          <IonCol>
          <IonCard className="design">
            <IonImg className="dimg" src="./assets/technology.jpg">
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
          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/technology.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Tech</IonRow>
                <IonRow  className="sub-text">You on the cutting edge of technology have already made yesterday’s..</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/fashionimg.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Fashion</IonRow>
                <IonRow  className="sub-text"> Fashion is life and just like life, you must alaways express your feelings freely.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/sportsimg.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Sports</IonRow>
                <IonRow  className="sub-text"> Don’t measure yourself by what you have accomplished, but by what you should have..</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/artimg.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Art</IonRow>
                <IonRow  className="sub-text"> I think being different, going against the grain of society is the greatest thing in the world</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>
       
          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/gunimg1.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Gun Control</IonRow>
                <IonRow  className="sub-text">Aim for the high mark and you will hit it.. No, not the first time, not the second time and maybe not the third. But...</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>
          
          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/drama1.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Drama</IonRow>
                <IonRow  className="sub-text">It was only a smile, nothing more. It didn't make everything all right. It didn't make …</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/nature.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Nature</IonRow>
                <IonRow  className="sub-text"> Look deep into nature, and then you will understand everything better.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/travel.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Travel</IonRow>
                <IonRow  className="sub-text"> Don’t tell me how educated you are, tell me how much you have travelled..</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/mistary.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Mystery</IonRow>
                <IonRow  className="sub-text"> The most beautiful experience we can have is the mysterious. It is the fundamental emotion.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>
       
          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/miscellances.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Miscellaneous</IonRow>
                <IonRow  className="sub-text"> Just don't forget that some of us watch the sunset too.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/business.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Business</IonRow>
                <IonRow  className="sub-text"> There are no secrets to success. It is the result of preparation, hard work, and learning from …</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>
        
          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/music.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Music</IonRow>
                <IonRow  className="sub-text"> Music touches us emotionally, where word...</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/food.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Food</IonRow>
                <IonRow  className="sub-text"> One cannot think well, love well, sleep well if one has not dined well.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/historyimg.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >History</IonRow>
                <IonRow  className="sub-text"> History repeats itself, first as tragedy, second as farce.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/social.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Social Media</IonRow>
                <IonRow  className="sub-text"> Social media is not a media. The key is to listen, engage, and build relationships.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>
        
          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/birthc.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Birth Control</IonRow>
                <IonRow  className="sub-text">  No woman can call herself free who does not own and control her body.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/education.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Education</IonRow>
                <IonRow  className="sub-text"> The world is a book and those who do not travel read only one page.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/climatech.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Climate Change</IonRow>
                <IonRow  className="sub-text"> Even if you never have the chance to see or touch the ocean, the ocean touches …</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>
       
          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/mafia.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Mafia</IonRow>
                <IonRow  className="sub-text"> If you think your boss is stupid, remember: you wouldn’t have a job if he was any smarter.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/childabuse.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Child Abuse</IonRow>
                <IonRow  className="sub-text">Faith is why I'm here today and faith is why I made it through.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>
         
          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/bird.png"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Birds</IonRow>
                <IonRow  className="sub-text">Not humans, but birds often witness the most beautiful mornings in this world!</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/romantic.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Romantic</IonRow>
                <IonRow  className="sub-text">I will never stop trying. Because when you find the one, you never give up.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/gold.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Gold</IonRow>
                <IonRow  className="sub-text">Ô, Sunlight! The most precious gold to be found on Earth.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>
      
          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/religian.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Religion</IonRow>
                <IonRow  className="sub-text">Religion is what keeps the poor from murdering the rich.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/selfcare.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Self-health</IonRow>
                <IonRow  className="sub-text">Take care of your body, it’s the only place you have to live.</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>

          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/polutionw.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Pollution</IonRow>
                <IonRow  className="sub-text">Pollution is nothing but the resources we are not harvesting..</IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>
        
          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/woman.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Women</IonRow>
                <IonRow  className="sub-text">I believe in being strong when everything seems to be going wrong, I believe that happy girls are the prettiest girls. </IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>
        
          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/internet.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Internet</IonRow>
                <IonRow  className="sub-text">The Internet is the world's largest library. It's just that all the books are on the floor. </IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>
        
        
          <IonCard  className="card-cls" routerlink="/tech">
            <IonRow>
              <IonCol size="6">
                <IonImg src="./assets/yogaw.jpg"></IonImg>
              </IonCol>
              <IonCol size="6" className="tech-text">
                <IonRow  className="tech" >Yoga</IonRow>
                <IonRow  className="sub-text">Yoga is a light, which once lit will never dim. The better your practice, the brighter your flame. </IonRow>
                <IonRow className="ion-margin-top"><IonButton className="tech-btn" color="danger" routerLink="/tech">Explore more</IonButton></IonRow>
              </IonCol>
            </IonRow>
          </IonCard>
       
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
