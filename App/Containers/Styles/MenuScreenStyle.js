import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  ViewContainer: {
    flex: 1,
    backgroundColor: '#0084ff'
},
MenuItemContainer: {
    flexDirection:'row',
    alignItems: 'flex-start',
    justifyContent : 'flex-start'


},
content: {
    zIndex: 1
},
footerContainer: {
   flexDirection: 'row',
   paddingHorizontal: 10,
   paddingVertical: 10,
   backgroundColor: '#555566' 
},
imageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5
},
listContainer: {
    marginHorizontal: 10
},
text: {
    color: '#fff'
},
containerCell: {
    marginBottom: 10
},
textTitle: {
    fontSize: 13
},
textBy: {
    fontSize: 12
},

menuClickable:{
  flex: 0.8
},
textMenu: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 5,
  },
MenuIcon: {

flex: 0.2,

},
MenuLogo:{
   width: 141, height: 49, marginBottom: 20
  }






})
