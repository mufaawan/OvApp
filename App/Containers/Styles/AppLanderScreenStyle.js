import { StyleSheet, Image } from 'react-native'
import { ApplicationStyles, Dimensions } from '../../Themes/'


export default StyleSheet.create({
  
CarouselParentContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},
CarouselContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10
},
CarouselContentContainer: {
  borderColor: '#CCC',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
CarouselStyle:
{  
  zIndex: 0, 
  position: 'absolute',
  resizeMode: 'cover',
  flex:1


},
CarouselParentText:
{
  flex: 1,
  color: 'white',
  zIndex: 1,
  position: 'absolute',
  fontSize: 30
},
CarouselImage:
 { 
   justifyContent: 'center', 
   alignItems: 'center', 
   width: 400,
   height : 600,

   zIndex: 0, 
   position: 'absolute' },

 })
