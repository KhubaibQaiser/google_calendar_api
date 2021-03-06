import {Navigation} from 'react-native-navigation';
import {NavigationMap, registerScreens} from './src/app/screens/navigation';

registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: NavigationMap.Home.name,
            },
          },
        ],
      },
    },
  });
});

Navigation.setDefaultOptions({
  topBar: {
    title: {
      color: 'black',
    },
    background: {
      color: '#eee',
    },
  },
});
