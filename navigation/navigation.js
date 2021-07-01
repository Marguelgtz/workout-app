import React from "react";

//import navigators
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
} from "react-navigation";

// screen imports
/* 
-- AUTH 
Auth loading screen 
landing screen 
sign up screen 
login screen

--APP BOTTOM TABS
homescreen (routines)
general stats 
profile 

-- OFF TAB SCREENS 
create routine 
exersices 
exersice 
routine 
active routine thing
*/

// CONFIGS
const AuthStackConfig = {
  Landing: LandingScreen,
  SignUp: SignUpScreen,
  Login: LoginScreen,
};

const BottomTabConfig = {
  Stats: {},
  Home: {},
  Profile: {},
};

const OffTabConfig = {
  CreateRoutine: CreateRoutineScreen,
  Excersices: ExcersicesScreen,
  Excersice: ExcersiceScreen,
  Routine: RoutineScreen,
  ActiveRoutine: ActiveRoutineScreen,
};
