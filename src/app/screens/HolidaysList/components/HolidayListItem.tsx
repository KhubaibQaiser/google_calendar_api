import React from 'react';
import {Text, View} from 'react-native';

export default (props: {holidayDate: string; holidayName: string}) => {
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: '#eee',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
      }}>
      <Text>
        {props.holidayDate} - {props.holidayName}
      </Text>
    </View>
  );
};
