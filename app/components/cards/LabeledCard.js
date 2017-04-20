import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const styles = StyleSheet.create({
  fdRecordCard:{
    minHeight: 100,
    marginTop: 30, // remove this
    marginHorizontal:20,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent:'space-between',
    zIndex: 1
  },
  recordCardlabel:{
    minHeight: 25,
    position: 'absolute',
    top: 20,
    left:30,
    backgroundColor:'#B8C0C3',
    paddingHorizontal:10,
    paddingVertical:2,
    elevation: 5,
    zIndex:5
  },
  whiteText:{
    color:'white'
  }
})


export default class LabeledCard extends React.Component{
  static propTypes = {
    navigate: React.PropTypes.func
  }
  constructor(){
    super()
  }

  editFamDayRecord = () => {
    this.props.navigate('Edit', { id: '123' })
  }
  
  render(){
    return(
      <View>
        <View style={styles.recordCardlabel}>
          <Text style={styles.whiteText}>My Family</Text>
        </View>
        <TouchableNativeFeedback onPress={this.editFamDayRecord}>
          <View style={styles.fdRecordCard}>
          <View style={styles.bigDateContainer}>
            <Text>
              19th August
            </Text>
          </View>
          <View style={styles.cardIconContainer}>
            <Text>

            </Text>
          </View>
        </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

}
