import React from "react";

//import Icons
import { Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";

//import navigators
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
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

// IMPORT SCREENS
// --AUTH
import {
  LandingScreen,
  LoginScreen,
  SignUpScreen,
  AuthLoadingScreen,
} from "../screens/auth";

// --APP
import {
  ActiveRoutineScreen,
  RoutineScreen,
  CreateRoutineScreen,
  HomeScreen,
  StatsScreen,
  ProfileScreen,
  ExercisesScreen,
  ExerciseScreen,
} from "../screens/app";

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
  Excersice: ExerciseScreen,
  Excersices: ExercisesScreen,
  Routine: RoutineScreen,
  ActiveRoutine: ActiveRoutineScreen,
};

//NAVIGATORS

// -BOTTOM TAB NAVIGATOR
const AppTabNavigator = createBottomTabNavigator(BottomTabConfig, {
  initialRouteName: "Home",
});

// -AUTH NAVIGATOR
const AuthStack = createStackNavigator(AuthStackConfig, {
  headerMode: "none",
  initialRouteName: "landing",
});

const OffTabSwitch = createSwitchNavigator(OffTabConfig);

const MainApp = createStackNavigator(
  {
    App: AppTabNavigator,
    OffTab: OffTabSwitch,
  },
  { initialRouteName: "App", headerMode: "none" }
);

const AppSwitch = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainApp,
    Auth: AuthStack,
  },
  {
    initialRouteName: Auth,
  }
);

export default createAppContainer(AppSwitch);
