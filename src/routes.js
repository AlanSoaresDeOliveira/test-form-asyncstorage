import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './pages/Dashboard/index';
// import DashboardWithForm from './pages/DashboardWithForm/index';
import ListUsers from './pages/ListUsers/index';

const AppRoutes = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppRoutes.Navigator>
        <AppRoutes.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        {/* <AppRoutes.Screen
          name="DashboardWithForm"
          component={DashboardWithForm}
        /> */}
        <AppRoutes.Screen
          name="ListUsers"
          component={ListUsers}
          options={{
            headerShown: false,
          }}
        />
      </AppRoutes.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
