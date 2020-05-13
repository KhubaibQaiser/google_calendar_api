import React from 'react';
import {View} from 'react-native';
import {Navigation} from 'react-native-navigation';

import ButtonPrimary from '../../components/Buttons/ButtonPrimary';

import styles from './styles';

export const Home = (props: {componentId: string}) => {
  const onNavigateToHolidaysList = () => {
    Navigation.push(props.componentId, {component: {name: 'HolidaysList'}});
  };

  return (
    <View style={styles.container}>
      <ButtonPrimary title="Start" onPress={onNavigateToHolidaysList} />
    </View>
  );
};
