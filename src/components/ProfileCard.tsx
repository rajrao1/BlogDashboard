import React, {useState, useEffect} from 'react';
import {SafeAreaView,View, Text, ActivityIndicator, FlatList} from 'react-native';

const ProfileCard = () => {

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
    <SafeAreaView style={{backgroundColor: 'yellow'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
            <Text>{users[0].name}</Text>
            <Text>{users[0].username}</Text>
            <Text>{users[0].email}</Text>
            <Text>{users[0].phone}</Text>
        </View>
      )}
    </SafeAreaView>
  );
  }

export default ProfileCard;