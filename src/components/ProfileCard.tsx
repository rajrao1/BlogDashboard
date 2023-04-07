import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  ActivityIndicator,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { getUser } from '../api/getUser';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  console.log('Users', users);
  function randomUser(min:number, max:number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const getUser = async () => {
    try {
      let userId:number = randomUser(1, 10);
      const response = await fetch('https://jsonplaceholder.typicode.com/users/'+ userId.toString());
      const json = await response.json();
      const userArray:User[] = [json];
      setUsers(userArray);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
        {isLoading ? (
        <ActivityIndicator />
      ) : (
        <><Image
        source={{uri: 'https://randomuser.me/api/Portraits/men/1.jpg'}}
        style={styles.sideMenuProfileIcon}
      />
       <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Text>{users[0].name}</Text>
            <Text>{users[0].username}</Text>
            <Text>{users[0].email}</Text>
            <Text>{users[0].phone}</Text>
        </View>
        </>
      )}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginVertical: 5
  },
});

export default CustomSidebarMenu;