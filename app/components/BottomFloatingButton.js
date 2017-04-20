import React from 'react';
import { TouchableNativeFeedback, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomButtonContainer:{
    backgroundColor:'teal',
    height:36,
    position:'absolute',
    bottom:15,
    paddingHorizontal: 5,
    alignItems:'center',
    elevation: 5
  }
})



export default class BottomFloatingButton extends React.PureComponent {
  static propTypes = {
    processClick: React.PropTypes.func.isRequired
  }
  constructor(){
    super()
  }
  render(){
    return(
      <TouchableNativeFeedback onPress={this.props.processClick}>
        <View style={[styles.bottomButtonContainer, {right:this.props.right}]}>
          {this.props.children}
        </View>
      </TouchableNativeFeedback>


    )
  }
}
