import Carousel from 'react-native-carousel-view';
import React, { Component } from 'react';
import { Text, Dimensions, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AppLanderScreenStyle';


//This is Onboarding Screen

class AppLanderScreen extends Component {


  render() {
    //Delegate will be used to navigate between screens
    const { navigate } = this.props.navigation;
    //holds the current device screen size
    const windowSize = Dimensions.get('window'); 
    return (

      //Parent  Container for Whole Screnn
      <View style={styles.ParentContainer}>

        {/* Carousel Container: 
        There are multiple views on single screen with different ZIndices pleae view layout Image*/}
        <View style={styles.container}>


          {/* Carousel Slies Container: Each added view is added as a carousel slide */}
          <Carousel

            style={styles.CarouselStyle}
            width={windowSize.width}
            height={windowSize.height}
            delay={2000}
            onScroll={() => console.log('on scroll view')}
            onScrollBegin={() => console.log('scroll begin')}
            onPageChange={(page) => console.log('scroll change', page)}>

            {/* Onboardiing 1 Slide*/}
            <View style={styles.contentContainer}>

              <Text style={styles.CarouselText}> Onboarding 1 Heading </Text>
              <Image
                style={styles.CarouselImage}
                source={require('../AppResources/carousel/onboarding-1.png')}
              />
            </View>
            {/* Onboardiing 2 Slide*/}
            <View style={styles.contentContainer}>

              <Text style={styles.CarouselText}> Onboarding 2 Heading </Text>
              <Image
                style={styles.CarouselImage}
                source={require('../AppResources/carousel/onboarding-2.png')}
              />
            </View>
            {/* Onboardiing 3 Slide*/}
            <View style={styles.contentContainer}>

              <Text style={styles.CarouselText}> Onboarding 3 Heading </Text>
              <Image
                style={styles.CarouselImage}
                source={require('../AppResources/carousel/onboarding-3.png')}
              />
            </View>
          </Carousel>
          <View style={styles.SpaceBW}>

            { /* OnBoardingLogo */}
            <View style={styles.OnboardinLogoContainer} >

              <Image
                style={styles.OnboardingLogo}
                source={require('../AppResources/carousel/onboarding-logo.png')}
              />

            </View>

            {/**
             to Write text: Replacment of text in image
             */}
            <View style={styles.OnboardingTextsContainer} />
            

            {/* Register and Login Buttons Container */}
            <View style={styles.ButtonsContainer} >
              {/* Login Button- Primary Button */}
              <TouchableOpacity
                style={styles.ButtonPrimary}
                onPress={() => navigate('LoginScreen')}
                underlayColor='#fff'
              >
                <Text
                  style={styles.ButtonPrimaryText}
                >Login</Text>
              </TouchableOpacity>

              {/* Register Button- Secondary Button */}
              <TouchableOpacity
                style={styles.ButtonSecondary}
                onPress={() => navigate('RegisterScreen')}
                underlayColor='#fff'
              >
                <Text
                  style={styles.ButtonSecondaryText}
                >Register</Text>
              </TouchableOpacity>

            </View>

            {/* Skip Button to move on Menu Screen */}
            <TouchableOpacity
              style={styles.SkipButton}
              onPress={() => navigate('MenuScreen')}
              underlayColor='#fff'
            >
              <Text
                style={styles.SkipButtonText}
              >Skip & Start Shoping</Text>
            </TouchableOpacity>

          </View>


        </View>
      </View >
    );
  }
}


// Not used yet- May be used in future as per navigation requirments
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLanderScreen)
