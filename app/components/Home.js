import React from 'react';
import { Image, Text, StyleSheet, View, StatusBar } from 'react-native';
import LabeledCard from './LabeledCard'

const styles = StyleSheet.create({
  container : {
    flex: 1,
    width: null,
    height: null,
    zIndex:-1
  }
})

class Home extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <Image style={styles.container} resizeMode='cover'  source={require('../../assets/images/home-bg-image-hd.jpg')}>
        <StatusBar backgroundColor={'black'} />
        <LabeledCard />
      </Image>
    )
  }

}



export default Home
