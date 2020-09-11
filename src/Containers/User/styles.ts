import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 20,
  },
  scrollView: {flex: 1},
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  nameContainer: {
    backgroundColor: '#484848',
    padding: 20,
  },
  nameText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  companyName: {
    fontSize: 20,
    color: '#fff',
  },
  infoWrap: {
    paddingHorizontal: 20,
  },
  contactWrap: {
    flexDirection: 'column',
    padding: 20,
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 5,
  },
  titleWrap: {
    marginVertical: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
});

export default styles;
