/**
 * Dashboard React Native App
 *
 *
 * @format
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PostsScreen from './src/screens/PostsScreen';
import DashboardScreen from './src/screens/Dashboards';
import ProfileScreen from './src/screens/Profile';
import CustomSidebarMenu from './src/components/ProfileCard';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function PostsScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Posts"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Posts" component={PostsScreen} />
    </Stack.Navigator>
  );
}

function DashboardScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
}

function ProfileScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator contentOptions={{
      activeTintColor: '#e91e63',
      itemStyle: {marginVertical: 5},
    }}
    drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen options={{drawerLabel: 'Posts', title: 'Posts'}} name="PostsD" component={PostsScreenStack} />
      <Drawer.Screen options={{drawerLabel: 'Dashboard', title: 'Dashboard'}} name="DashboardD" component={DashboardScreenStack} />
      <Drawer.Screen options={{drawerLabel: 'User Profile', title: 'User Profile'}} name="ProfileScreenD" component={ProfileScreenStack} />
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