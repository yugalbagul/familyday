import React from 'react';
import { Image, StyleSheet, StatusBar, ScrollView } from 'react-native';
import LabeledCard from './cards/LabeledCard'

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
      <Image style={styles.container} resizeMode='cover'  source={require('../../assets/images/hearts-bw-img-hd.jpeg')}>
        <StatusBar backgroundColor={'black'} />
        <ScrollView >
          <LabeledCard navigate={this.props.navigation.navigate}/>
        </ScrollView>

      </Image>
    )
  }

}



export default Home
