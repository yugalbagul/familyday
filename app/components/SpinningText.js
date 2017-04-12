import React from 'react';
import { Animated, View, Easing } from 'react-native';


export default class SpinningText extends React.Component {
  constructor(){
    super();
    this.animatedVal = new Animated.Value(0)
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.animate()
  }

  animate(){
    Animated.timing(this.animatedVal,{
      toValue: 1,
      duration: 2000,
      easing: Easing.bounce
    }).start(() => {this.props.navigate('Home')})
  }

  render(){
    const spinValue = this.animatedVal.interpolate({
      inputRange: [0,1],
      outputRange:['0deg', '360deg']
    })
    const fontSize = this.animatedVal.interpolate({
      inputRange:[0,1],
      outputRange:[10,50]
    })
    return(
      <View>
          <Animated.Text
            style={{
              transform:[{rotate: spinValue}],
              fontSize: fontSize,
              color:'#00BCD4',
              textAlign: 'center',
              margin: 10,
              fontFamily:'ChelaOne-Regular',
            }}
          >
          Family Day</Animated.Text>
      </View>
    )
  }
}
