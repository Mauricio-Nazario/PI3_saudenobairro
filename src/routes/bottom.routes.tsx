import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../pages/home';
import Perfil from '../pages/perfil';

const Tab = createBottomTabNavigator();

export default function BottomRoutes(){
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="List" 
            component={List} 
        />
        <Tab.Screen 
            name="Perfil"  
            component={Perfil} 
        />
    </Tab.Navigator>
  );
}