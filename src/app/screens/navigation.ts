import {Navigation} from 'react-native-navigation';
import {Home} from './Home';
import {HolidaysList} from './HolidaysList';

export const NavigationMap = {
  Home: {
    name: 'Home',
    component: Home,
    options: {
      topBar: {
        title: {
          text: 'Home',
        },
      },
    },
  },
  HolidaysList: {
    name: 'HolidaysList',
    component: HolidaysList,
    options: {
      topBar: {
        title: {
          text: 'Holidays List',
        },
      },
    },
  },
};

export function registerScreens() {
  for (const key in NavigationMap) {
    Navigation.registerComponent(key, () => NavigationMap[key].component);
  }
}
