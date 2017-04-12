import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fdRecordCard:{
    minHeight: 75,
    marginTop: 20, // remove this
    marginHorizontal:20,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent:'space-between',
    zIndex: 1
  },
  recordCardlabel:{
    position: 'absolute',
    top: 10,
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

export default function LabeledCard(props){
  return(
    <View>
      <View style={styles.recordCardlabel}>
        <Text style={styles.whiteText}>My Family</Text>
      </View>
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
    </View>
  )
}
