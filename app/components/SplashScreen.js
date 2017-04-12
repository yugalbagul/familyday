import React from 'react';
import { View, StyleSheet } from 'react-native'
import SpinningText from './SpinningText'

const SplashScreen = (props) => {
  const { navigate } = props.navigation;
  return(
    <View style={styles.splashContainer}>
      <SpinningText navigate={navigate}/>
    </View>
  )
}

const styles = StyleSheet.create({
  splashContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SplashScreen;
