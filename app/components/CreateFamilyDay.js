import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import AddPersonCard from './cards/AddPersonCard'
import BottomFloatingButton from './BottomFloatingButton';

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#494D50',
    zIndex:-1
  }
})

export default class Edit extends React.Component {
  constructor(){
    super();
  }

  saveFamDay = () =>{

  }

  render(){
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor={'black'} />
        <AddPersonCard />
        <BottomFloatingButton processClick={this.saveFamDay} position='right' right={105}>
          <Text>Save</Text>
        </BottomFloatingButton>
        <BottomFloatingButton processClick={this.saveFamDay} position='right' right={10}>
          <Text>Add Person</Text>
        </BottomFloatingButton>
      </View>
    )
  }

}
