import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {User, Post} from './DataModel';


const APICall = () => {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

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


  const getPosts = async () => {
    try {
      let userId:number = randomUser(1, 10);
      const response = await fetch('https://jsonplaceholder.typicode.com/users/'+ userId.toString()+'/posts');
      const json = await response.json();
      setPosts(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={posts}
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
};

export default APICall;