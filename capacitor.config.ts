import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Pet Generator',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
