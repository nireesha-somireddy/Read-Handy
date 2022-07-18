import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'figma2',
  webDir: 'build',
  bundledWebRuntime: false,
  
  plugins: {
    SplashScreen: {
        launchShowDuration : 1000
    },
    GoogleAuth: {

      scopes: ["profile","email"],

      serverClientId: "982396413499-dl2448lfeqg59v5h1vs0kg902bg0q1eb.apps.googleusercontent.com",

      forceCodeForRefreshToken: true,

    },
    
  },
  
};

export default config;
