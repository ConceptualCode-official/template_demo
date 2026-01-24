import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.elitecricket.app',
  appName: 'Elite Cricket',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#003366",
      showSpinner: true,
      spinnerColor: "#fbbf24"
    }
  }
};

export default config;
