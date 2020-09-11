import {Linking, Platform} from 'react-native';
import {createOpenLink} from 'react-native-open-maps';
export const openPhoneNumber = (phoneNumber?: String) => {
  if (phoneNumber) {
    Linking.canOpenURL(`tel:${phoneNumber}`).then((supported) => {
      if (supported) {
        Linking.openURL(`tel:${phoneNumber}`);
      }
    });
  }
};

export const openEmail = (email?: String) => {
  if (email) {
    Linking.canOpenURL(`mailto:${email}`).then((supported) => {
      if (supported) {
        Linking.openURL(`mailto:${email}`);
      }
    });
  }
};

export const openUrl = (url?: string) => {
  if (url) {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      }
    });
  }
};

export const openMap = (latitude?: string, longitude?: string) => {
  if (!!latitude && !!longitude) {
    const openMaps = createOpenLink({
      provider: Platform.OS === 'ios' ? 'apple' : 'google',
      end: `${latitude},${longitude}`,
      navigate_mode: 'navigate',
    });
    openMaps();
  }
};
