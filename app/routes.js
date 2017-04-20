// useing react-navigation for routing
import { StackNavigator } from 'react-navigation';
import SplashScreen from './components/SplashScreen'
import Home from './components/Home';
import CreateFamilyDay from './components/CreateFamilyDay';


const routes = StackNavigator({
  Edit: { screen: CreateFamilyDay},
  Splash : { screen: SplashScreen },
  Home: { screen: Home },
},
 { headerMode: 'none' } );


export default routes;
