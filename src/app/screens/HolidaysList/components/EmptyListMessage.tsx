import React from 'react';
import {View, Text} from 'react-native';

export default () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>There are no records to show. Pull to refresh the data.</Text>
    </View>
  );
};
