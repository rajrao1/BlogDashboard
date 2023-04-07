/**
 * Dashboard React Native App
 *
 *
 * @format
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import PostsScreen from './src/screens/PostsScreen';
import DashboardScreen from './src/screens/Dashboards';
import ProfileCard from './src/components/ProfileCard';
import { CustomerDrawerLabel } from './src/components/CustomDrawerLabel';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
      activeTintColor: '#e91e63',
      itemStyle: {marginVertical: 5},
    }}
    drawerContent={props => <ProfileCard {...props} />}>
      <Drawer.Screen
      options={{
        drawerLabel: () => (
          <CustomerDrawerLabel />
        ),
      }}
        name="Home" component={HomeScreen} />
      <Drawer.Screen options={{drawerLabel: 'Posts', title: 'Posts'}} name="Posts" component={PostsScreen} />
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}