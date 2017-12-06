import { StyleSheet, Image, Dimensions } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

const windowSize = Dimensions.get('window');


export default StyleSheet.create({
  
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
  
  })
  
