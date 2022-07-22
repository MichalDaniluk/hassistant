import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#F3F2F2',
    marginLeft: 0,
    marginTop: 40,
  },
  title: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    height: 48,
    padding: 4,
    paddingLeft: 24,
  },
  rowBody: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    height: 150,
    padding: 4,
    paddingLeft: 24,
  },
  label: {
    color: '#28235F',
    fontWeight: '600',
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  link: {
    color: '#28235F',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 12,
  },
});

export default styles;
