import {StyleSheet} from 'react-native';
import {color, font} from '../../styles/global';

export const RegistrationStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: font.FiraCodeBold,
    fontSize: 20,
    fontWeight: 'bold',
    color: color.light,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontFamily: 'Inter_18pt-Regular',
    fontSize: 18,
    color: '#EEEEEE',
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    color: '#EEEEEE',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  card: {
    flex: 1,
    backgroundColor: '#222831',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: '-50%'}, {translateY: '-50%'}],
    width: '80%',
    // height: 'fit-content',
    borderRadius: 10,
    justifyContent: 'flex-start',
    opacity: 0.8,
    flexDirection: 'column',
    color: '#EEEEEE',
    paddingHorizontal: 4,
    paddingVertical: 20,
  },
});
