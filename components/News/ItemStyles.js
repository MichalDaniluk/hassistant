import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    position: 'relative',
    backgroundColor: '#F3F2F2',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingTop: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 24,
    fontFamily: 'Monteserrat',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: '#28235F',
    marginLeft: 2,
    paddingTop: 12,
  },
  author: {
    fontSize: 12,
    color: '#28235F',
    marginLeft: 12,
  },
  image: {
    borderRadius: 20,
    width: '100%',
    height: 250,
    marginTop: 12,
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  description: {
    fontSize: 12,
    color: '#7B7B7B',
  },
  link: {
    position: 'absolute',
    right: 4,
    bottom: 0,
    fontSize: 12,
    color: '#4FCBC2',
    fontWeight: '500',
    alignText: 'right',
  },
});

export default styles;
