/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './components/Map';
import {name as appName} from './app.json';
import DetailsComponent from './components/DetailsComponent';
import TabNavigation from './components/TabNavigation';

AppRegistry.registerComponent(appName, () => TabNavigation);
