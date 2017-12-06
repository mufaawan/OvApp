import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from './Navbar';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MenuScreenStyle';


const {width, height} = Dimensions.get('window');


/*
  Menu Animation is current created by:
  https://github.com/mariodev12/react-native-menu-animation-recipe

  I have made modifications to above mentioned menu.
*/

class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isOpenMenu: false,
      rotateY: new Animated.Value(0),
      translateX: new Animated.Value(width),
      menuAnimation: new Animated.Value(0),

    };
  }


  //Method Responsible to Show Menu on Screen with Animation
  showMenu() {
    if (this.state.isOpenMenu) {
      this.setState({ isOpenMenu: false });
      Animated.parallel([
        Animated.timing(
          this.state.translateX, {
            toValue: width
          }
        ),
        Animated.timing(
          this.state.rotateY, {
            toValue: 0
          }
        ),
        Animated.timing(
          this.state.rotateY, {
            toValue: 0
          }
        )
      ]).start();
    } else {
      this.setState({ isOpenMenu: true });
      Animated.parallel([
        Animated.timing(
          this.state.translateX, {
            toValue: width * 0.60
          }
        ),
        Animated.timing(
          this.state.rotateY, {
            toValue: 1
          }
        ),
        Animated.timing(
          this.state.menuAnimation, {
            toValue: 1,
            duration: 800
          }
        )
      ]).start();
    }
  }


  //This method is responsible for closing the Menu with animation
  closeMenu() {
    this.setState({ isOpenMenu: false });
    Animated.parallel([
      Animated.timing(
        this.state.translateX, {
          toValue: width
        }
      ),
      Animated.timing(
        this.state.rotateY, {
          toValue: 0
        }
      ),
      Animated.timing(
        this.state.menuAnimation, {
          toValue: 0,
          duration: 300
        }
      )
    ]).start();
  }

  render() {
    return (
      <View style={styles.ViewContainer}>

        <Animated.View
          style={[styles.content, {
            width: width,
            transform: [
              {
                perspective: 450
              },
              {
                translateX: this.state.translateX.interpolate({
                  inputRange: [0, width],
                  outputRange: [width, 0]
                })
              },
              {
                rotateY: this.state.rotateY.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '-5deg']
                })
              }
            ]
          }]}
        >
          {this.state.isOpenMenu ? <Navbar icon="times" showMenu={this.closeMenu.bind(this)} /> : <Navbar icon="bars" showMenu={this.showMenu.bind(this)} />}



          {/* This view hold the Content of screen  */}
          <View
            style={styles.listContainer}
          >
            <Text> This is Stores Screen </Text>

          </View>
        </Animated.View>


        {/*Menu Items
        - Each Menu Item is added as a new View- This modifiation is done by OV Dev Team
        */}
        <Animated.View
          style={[styles.Menu, {
            opacity: this.state.menuAnimation,
          }]}
        >


          {/*Logo at the top inside menu*/}
          <Image
            style={styles.MenuLogo}
            source={require('../AppResources/menuscreen/logo-menu.png')}
          />

          {/*Stores MenuItem*/}
          <View style={styles.MenuItemContainer}>
            <Icon style={styles.MenuIcon} name="map-marker" size={15} color="#fff" />
            <TouchableOpacity style={styles.menuClickable} >
              <Text style={styles.textMenu}>Stores</Text>
            </TouchableOpacity>
          </View>

          {/*My Orders MenuItem*/}
          <View style={styles.MenuItemContainer}>
            <Icon style={styles.MenuIcon} name="shopping-basket" size={15} color="#fff" />
            <TouchableOpacity style={styles.menuClickable} >
              <Text style={styles.textMenu}>My Orders</Text>
            </TouchableOpacity>
          </View>


          {/*Settings MenuItem*/}
          <View style={styles.MenuItemContainer}>
            <Icon style={styles.MenuIcon} name="cogs" size={15} color="#fff" />
            <TouchableOpacity style={styles.menuClickable} >
              <Text style={styles.textMenu}>Settings</Text>
            </TouchableOpacity>
          </View>

          {/*Help MenuItem*/}
          <View style={styles.MenuItemContainer}>
            <Icon style={styles.MenuIcon} name="question" size={15} color="#fff" />
            <TouchableOpacity style={styles.menuClickable} >
              <Text style={styles.textMenu}>Help</Text>
            </TouchableOpacity>
          </View>

        </Animated.View>
      </View>
    )
  }

}


//These methonds are default methonds. No use yet. May be used in future as per navigation requirments
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)
