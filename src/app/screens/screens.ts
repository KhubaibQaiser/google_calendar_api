import {Navigation} from 'react-native-navigation';
// import navigation from './navigation';
import {Home} from './Home';
import {HolidaysList} from './HolidaysList';

export function registerScreens() {
  //   for (const key in navigation) {
  //     Navigation.registerComponent(key, () => navigation[key].default);
  //   }
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('HolidaysList', () => HolidaysList);
}
