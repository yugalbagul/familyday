import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container:{
    minHeight: 100,
    marginHorizontal:20,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
    zIndex: 1,
  },
  formField:{
    flexDirection: 'row',
    minHeight:45
  },
  nameInput:{
    flex: 1,
    minWidth: 80
  },
  formFieldLabel:{
    alignItems:'center',
    justifyContent:'center'
  }
})


export default class AddPersonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      name:'',
      birthDay:'',
      relation:''
    }
  }
  handleNameChange = (text) => {
    this.setState({
      name: text
    });
  }
  handleRelationChange = (txt) =>{
    this.setState({
      relation:txt 
    });
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.formField}>
          <View style={styles.formFieldLabel}>
            <Text>Name : </Text>
          </View>
          <View>
            <TextInput
              value={this.state.name}
              style={styles.nameInput}
              autoCorrect={false}
              onChangeText={this.handleNameChange}
            />
          </View>
        </View>
        <View style={styles.formField}>
          <View style={styles.formFieldLabel}>
            <Text>BirthDate : </Text>
          </View>
          <View>
            <TextInput
              value={this.state.birthDate}
              style={styles.nameInput}
              autoCorrect={false}
            />
          </View>
        </View>
        <View style={styles.formField}>
          <View style={styles.formFieldLabel}>
            <Text>Relation : </Text>
          </View>
          <View>
            <TextInput
              value={this.state.relation}
              style={styles.nameInput}
              autoCorrect={false}
              onChangeText={this.handleRelationChange}
            />
          </View>
        </View>

      </View>
    )
  }
}
