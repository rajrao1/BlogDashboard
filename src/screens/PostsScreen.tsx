import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList, Image} from 'react-native';
import {Post} from '../components/DataTypes';

const PostsScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  function randomUser(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getPostsData = async () => {
    try {
      let userId: number = randomUser(1, 10);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/' +
          userId.toString() +
          '/posts',
      );
      const json = await response.json();
      setPosts(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  const renderPostDetails = (item: any) => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, paddingRight: 5, alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../../resources/blogpost.png')}   style={{width: 60, height: 60}}/>
          </View>
          <View style={{flex: 3}}>
            <Text style={{fontWeight:'bold', marginBottom:5}}>{item.item.title}</Text>
            <Text>{item.item.body}</Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: '#CCCCCC',
            marginVertical: 20,
          }}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={({id}) => id}
          renderItem={item => renderPostDetails(item)}
        />
      )}
    </View>
  );
};

export default PostsScreen;
