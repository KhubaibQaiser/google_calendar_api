import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Navigation} from 'react-native-navigation';

import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import {NavigationMap} from '../navigation';

import styles from './styles';

export const Home = (props: {componentId: string}) => {
  const onNavigateToHolidaysList = () => {
    Navigation.push(props.componentId, {
      component: {name: NavigationMap.HolidaysList.name},
    });
  };

  useEffect(() => {
    Navigation.mergeOptions(props.componentId, {...NavigationMap.Home.options});
  }, [props.componentId]);

  return (
    <View style={styles.container}>
      <ButtonPrimary title="Start" onPress={onNavigateToHolidaysList} />
    </View>
  );
};
