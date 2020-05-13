import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/app/screens/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
              options: {
                topBar: {
                  title: {
                    text: 'Home',
                  },
                },
              },
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
