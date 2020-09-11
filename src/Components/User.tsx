import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {IUser} from '../Shared/Interfaces';
import {useNavigation} from '@react-navigation/native';
interface UserProps {
  data: IUser;
}
export default function User(props: UserProps) {
  const {id, name, email} = props.data;
  const navigation = useNavigation();
  const onTabUser = useCallback(() => {
    navigation.navigate('User', {id});
  }, [navigation, id]);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={onTabUser}>
      <Image
        source={{
          uri:
            'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DEDEDE',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 20,
    borderRadius: 25,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
  },
});
