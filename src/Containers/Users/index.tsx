import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import UserAction from '../../Store/User/Actions';
import UserSelector from '../../Store/User/Selector';
import {IUser} from '../../Shared/Interfaces';
import Loading from '../../Components/Loading';
import User from '../../Components/User';

import styles from './styles';

const Users = () => {
  const dispatch = useDispatch();
  const {users, getUsersLoading} = useSelector(UserSelector.user);
  useEffect(() => {
    dispatch(UserAction.getUsers());
  }, [dispatch]);

  if (getUsersLoading) {
    return <Loading />;
  }
  if (!getUsersLoading && users) {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {users?.map((user: IUser, index: number) => (
            <User key={index} data={user} />
          ))}
        </ScrollView>
      </View>
    );
  }
  return null;
};

export default Users;
