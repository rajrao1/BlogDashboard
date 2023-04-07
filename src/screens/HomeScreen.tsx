import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';

const HomeScreen = () => {
    const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

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
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={users}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.id}, {item.title}
            </Text>
          )}
        />
      )}
    </View>
  );
  }

export default HomeScreen;