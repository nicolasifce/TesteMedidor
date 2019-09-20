import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import App from './src';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
