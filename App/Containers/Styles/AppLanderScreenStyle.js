import { StyleSheet, Dimensions } from 'react-native';

const windowSize = Dimensions.get('window');


export default StyleSheet.create({

  ParentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CarouselStyle:
  { zIndex: 0, position: 'absolute' },

  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CarouselText: {
    flex: 1,
    color: 'white',
    zIndex: 1,
    position: 'absolute',
    fontSize: 30
  },
  CarouselImage: {
    width: windowSize.width,
    height: windowSize.height,
    zIndex: 0,
    position: 'absolute'
  },
  OnboardinLogo: {
    position: 'absolute',
    width: 161,
    height: 36
  },
  OnboardinLogoContainer: { 
    flex: 15, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  SkipButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'

  },
  SkipButton: {
    justifyContent: 'flex-end',
    flex: 2,
  },
  SpaceBW: {
    width: 400,
    height: 500,
    zIndex: 1,
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  },
  OnboardingTextsContainer: {
    flex: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-around'
  },
  ButtonsContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  ButtonPrimary: {
    backgroundColor: '#0084ff',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#0084ff',

  },
  ButtonPrimaryText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 18,
    fontWeight: 'bold'
  },
  ButtonSecondary: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#0084ff',

  },
  ButtonSecondaryText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 18,
    fontWeight: 'bold'


  }
})

