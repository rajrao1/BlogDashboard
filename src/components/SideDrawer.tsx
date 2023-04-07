import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import Blogs from './Blogs';
import Posts from './Posts';

const Drawer = createDrawerNavigator();

const dimensions = useWindowDimensions();

const SideDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}>
      <Drawer.Screen name="Blogs" component={Blogs} />
      <Drawer.Screen name="Posts" component={Posts} />
    </Drawer.Navigator>
  );
}

export default SideDrawer;