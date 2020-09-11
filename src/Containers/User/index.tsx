import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import UserAction from '../../Store/User/Actions';
import UserSelector from '../../Store/User/Selector';
import Loading from '../../Components/Loading';

import styles from './styles';
import {openEmail, openMap, openUrl, openPhoneNumber} from '../../Shared/Utils';

interface UserProps {
  route: {
    params: {id: number};
  };
}
const User = (props: UserProps) => {
  const dispatch = useDispatch();
  const id = props.route.params.id;
  const {user, getUserLoading} = useSelector(UserSelector.user);
  useEffect(() => {
    dispatch(UserAction.getUser(id));
    return () => {
      dispatch(UserAction.getUserSuccess(null));
    };
  }, [dispatch, id]);

  if (getUserLoading) {
    return <Loading />;
  }
  if (!getUserLoading && user) {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <Image
            source={{
              uri:
                'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
            }}
            style={styles.image}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{user?.name}</Text>
            <Text style={styles.companyName}>{user?.company?.name}</Text>
          </View>
          <View style={styles.infoWrap}>
            <View style={styles.titleWrap}>
              <Text style={styles.title}>Contract Information</Text>
            </View>
            <View style={styles.contactWrap}>
              <Text
                style={[styles.text, styles.blue]}
                onPress={() => openEmail(user?.email)}>
                {user?.email}
              </Text>
              <Text style={styles.text}>{user?.address?.street}</Text>
              <Text style={styles.text}>{user?.address?.suite}</Text>
              <Text
                style={[styles.text, styles.blue]}
                onPress={() =>
                  openMap(user?.address?.geo?.lat, user?.address?.geo?.lng)
                }>{`${user?.address.city} ${user?.address?.zipcode}`}</Text>
              <Text
                style={[styles.text, styles.blue]}
                onPress={() => openPhoneNumber(user?.phone)}>
                {user?.phone}
              </Text>
            </View>
            <View style={styles.titleWrap}>
              <Text style={styles.title}>Other Information</Text>
            </View>
            <View style={styles.contactWrap}>
              <Text style={styles.text}>{user?.username}</Text>
              <Text
                style={[styles.text, styles.blue]}
                onPress={() => openUrl(`http://${user?.website}`)}>
                {user?.website}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  return null;
};

export default User;
