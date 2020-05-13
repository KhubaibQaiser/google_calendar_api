import React from 'react';
import {
  StyleSheet,
  GestureResponderEvent,
  TouchableHighlight,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

export default (props: {
  title: string;
  isLoading?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableHighlight onPress={props.onPress} disabled={props.isLoading}>
      <View style={styles.container}>
        {props.isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.text}>{props.title}</Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    maxWidth: 200,
    width: 120,
    height: 36,
    padding: 16,
    backgroundColor: '#276ef1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  text: {color: 'white'},
});
