import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';
import FlipCard from 'react-native-flip-card';

export default class flip extends Component {
  render() {
    return (
      <View style={styles.View}>
      <FlipCard
  style={styles.card}
  friction={0.00000002}
  perspective={1000}
  flipHorizontal={true}
  flipVertical={false}
  flip={true}
//  clickable={true}
  >
        {/* Face Side */}
        <View style={styles.face}>
          <Text>The Face</Text>
        </View>
        {/* Back Side */}
        <View style={styles.back}>
          <Text>The Back</Text>
        </View>
      </FlipCard>
      </View>

          );
  }
}
const styles = {
View: {
  justifyContent: 'center',
  flexDirection: 'row',
  height: 50,
  marginTop: 50,
  },
face: {
  flex: 1,
  width: 80,
  height: 20,
  backgroundColor: 'red'
    },
back: {
  flex: 1,
   width: 80,
   height: 20,
   backgroundColor: 'black'
  }
};
AppRegistry.registerComponent('flip', () => flip);
