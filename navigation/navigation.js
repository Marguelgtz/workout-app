import React from "react";

//import Icons
import { Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";

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
  Stats: {
    screen: StatsScreen,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Ionicons
          name="stats-chats"
          size={40}
          color={focused ? "black" : "grey"}
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Entypo name="home" size={40} color={focused ? "black" : "grey"} />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <FontAwesome name="user" size={40} color={focused ? "black" : "grey"} />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
};

const OffTabConfig = {
  CreateRoutine: CreateRoutineScreen,
  Excersices: ExcersicesScreen,
  Excersice: ExcersiceScreen,
  Routine: RoutineScreen,
  ActiveRoutine: ActiveRoutineScreen,
};
