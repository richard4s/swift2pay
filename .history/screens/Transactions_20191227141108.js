import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Transactions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Transactions List</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: null,
    width: null,
  }
});