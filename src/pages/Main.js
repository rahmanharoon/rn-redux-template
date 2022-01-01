import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {decrementAction, incrementAction} from '../redux/actions/counterAction';

const Main = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  const increment = () => {
    dispatch(incrementAction());
  };

  const decrement = () => {
    dispatch(decrementAction());
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrement}>
        <Text> SUBTRACT -- </Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity onPress={increment}>
        <Text> ADD ++ </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
