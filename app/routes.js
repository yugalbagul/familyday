// useing react-navigation for routing
import { StackNavigator } from 'react-navigation';
import SplashScreen from './components/SplashScreen'
import Home from './components/Home';


const routes = StackNavigator({
  Splash : { screen: SplashScreen },
  Home: { screen: Home }
},
 { headerMode: 'none' } );


export default routes;
