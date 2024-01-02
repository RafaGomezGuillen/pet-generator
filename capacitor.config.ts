import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.petgenerator.app',
  appName: 'Pet Generator',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
