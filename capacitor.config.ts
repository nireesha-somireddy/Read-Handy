import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'figma2',
  webDir: 'build',
  bundledWebRuntime: false,
  server:{
    url:'http://172.17.5.177:8100',
    cleartext: true
    },
  plugins: {
    SplashScreen: {
        launchShowDuration : 1000
    }
  }
};

export default config;
