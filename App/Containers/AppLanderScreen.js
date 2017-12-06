import Carousel from 'react-native-carousel-view';
import React, { Component } from 'react';
import { Text, Dimensions, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AppLanderScreenStyle';


class AppLanderScreen extends Component {

  
  render () {
    const {navigate} = this.props.navigation;
    const windowSize = Dimensions.get('window');
    return (

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={styles.container}>


          <Carousel

            style={{  zIndex: 0, position: 'absolute' }}
            width={windowSize.width}
            height={windowSize.height}
            delay={2000}
            onScroll={() => console.log('on scroll view')}
            onScrollBegin={() => console.log('scroll begin')}
            onPageChange={(page) => console.log('scroll change', page)}>

            <View style={styles.contentContainer}>

              <Text style={{ flex: 1, color: 'white', zIndex: 1, position: 'absolute', fontSize: 30 }}> Onboarding 1 Heading </Text>
              <Image
                style={{ width: windowSize.width, height: windowSize.height, zIndex: 0, position: 'absolute' }}
                source={require('../AppResources/carousel/onboarding-1.png')}
              />
            </View>
            <View style={styles.contentContainer}>

              <Text style={{ color: 'white', zIndex: 1, position: 'absolute', fontSize: 30 }}> Onboarding 2 Heading </Text>
              <Image
                style={{ width: windowSize.width, height: windowSize.height, zIndex: 0, position: 'absolute' }}
                source={require('../AppResources/carousel/onboarding-2.png')}
              />
            </View>
            <View style={styles.contentContainer}>

              <Text style={{ color: 'white', zIndex: 1, position: 'absolute', fontSize: 30 }}> Onboarding 3 Heading </Text>
              <Image
                style={{ width: windowSize.width, height: windowSize.height, zIndex: 0, position: 'absolute' }}
                source={require('../AppResources/carousel/onboarding-3.png')}
              />
            </View>
          </Carousel>
          <View style={{ width: 400, height:500, zIndex: 1, position: 'absolute', flex: 1, flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
          
          { /* OnBoardingLog */ }
          <View style={{flex: 15, flexDirection: 'row', justifyContent: 'center', alignItems:'center' }} >  

          <Image
                style={{position:'absolute', width: 161, height: 36}}
                source={require('../AppResources/carousel/onboarding-logo.png')}
              />

            </View>

            {/**
             to Write text: Replacment of text in image
             */}
          <View style={{ flex: 15, flexDirection: 'row', justifyContent: 'center', alignContent: 'space-around' }} >
            </View>
            <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-around'}} >
            <TouchableOpacity
              style={{
                backgroundColor: '#0084ff',
                justifyContent:'center',
                borderRadius: 6,
                borderWidth: 3,
                borderColor: '#0084ff',
                
              }}
              onPress={() =>  navigate('MenuScreen')}
              underlayColor='#fff'>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  paddingLeft: 40,
                  paddingRight: 40,
                  fontSize: 18,
                  fontWeight:'bold'
                  

                }}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: 'transparent',
                justifyContent:'center',
                borderRadius: 6,
                borderWidth: 3,
                borderColor: '#0084ff',
                
              }}
              onPress={() => navigate('HomeScreen')}
              underlayColor='#fff'>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  paddingLeft: 25,
                  paddingRight: 25,
                  fontSize: 18,
                  fontWeight:'bold'
                  

                }}>Register</Text>
            </TouchableOpacity>

            </View>    
            <TouchableOpacity
              style={{
                justifyContent: 'flex-end',
                flex:2,
                }}
              onPress={() => navigate('MenuScreen')}
              underlayColor='#fff'>
              <Text
                style={{
                  textAlign:'center',
                  color: '#fff', 
                  fontSize:12, 
                  fontWeight:'bold'

                }}>Skip & Start Shoping</Text>
            </TouchableOpacity>

          </View>
          
          
        </View>
      </View >
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(AppLanderScreen)
