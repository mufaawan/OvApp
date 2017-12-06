import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Text,
    StyleSheet,
    View,
    ListView,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    Image,
    Animated
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import data from './data'
import Navbar from './Navbar'


const {width, height} = Dimensions.get('window')

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MenuScreenStyle'

class MenuScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
        isLoaded: false,
        isOpenMenu: false,
        rotateY: new Animated.Value(0),
        translateX: new Animated.Value(width),
        menuAnimation: new Animated.Value(0),
        
    }
}

showMenu(){
    if(this.state.isOpenMenu){
        this.setState({isOpenMenu: false})
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
        ]).start()
    } else {
        this.setState({isOpenMenu: true})
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
        ]).start()
    }
}

closeMenu(){
    this.setState({isOpenMenu: false})
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
    ]).start()
}

render(){

  const {navigate} = this.props.navigation;
    return (
        <View style={styles.ViewContainer}>
          
            <Animated.View
                style={[styles.content, {
                    width: width,
                    backgroundColor: 'white',
                    flex: 1,
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
                {this.state.isOpenMenu ? <Navbar icon="times" showMenu={this.closeMenu.bind(this)}/> : <Navbar icon="bars" showMenu={this.showMenu.bind(this)}/>}
                <View
                    style={styles.listContainer}>
                    <Text> This is Stores Screen </Text>
                    
                </View>
            </Animated.View>
            <Animated.View
                style={[styles.menu, {
                    opacity: this.state.menuAnimation,
                    position: 'absolute',
                    width: 150,
                    left: 0,
                    top: 100,
                    backgroundColor: 'transparent'
                }]}
            >


            <Image
                style={styles.MenuLogo}
                source={require('../AppResources/menuscreen/logo-menu.png')}
            />
                <View style={styles.MenuItemContainer}>
                    
                    <Icon style={styles.MenuIcon} name="map-marker" size={15} color="#fff" />
                    <TouchableOpacity style={styles.menuClickable} >
                      <Text style={styles.textMenu}>Stores</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.MenuItemContainer}>
                    
                    <Icon style={styles.MenuIcon} name="shopping-basket" size={15} color="#fff" />
                    <TouchableOpacity style={styles.menuClickable} >
                   <Text style={styles.textMenu}>My Orders</Text>
                   </TouchableOpacity>
                </View>
                <View style={styles.MenuItemContainer}>
                    
                    <Icon style={styles.MenuIcon} name="cogs" size={15} color="#fff" />
                    <TouchableOpacity style={styles.menuClickable} >
                    <Text style={styles.textMenu}>Settings</Text>
                    </TouchableOpacity>
                </View>
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

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)
