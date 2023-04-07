import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {User} from '../components/DataTypes';

const ProfileScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  console.log('Users', users);
  function randomUser(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getUser = async () => {
    try {
      let userId: number = randomUser(1, 10);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/' + userId.toString(),
      );
      const json = await response.json();
      const userArray: User[] = [json];
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
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>{users[0].name}</Text>
          <Text style={styles.text}>{users[0].username}</Text>
          <Text style={styles.text}>{users[0].email}</Text>
          <Text style={styles.text}>{users[0].phone}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'slateblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '300',
  },
});

export default ProfileScreen;
