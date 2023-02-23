import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, Button } from 'react-native';
//icon imports:
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import RegistrationScreen from './screens/auth/RegistrationScreen';
import LoginScreen from './screens/auth/LoginScreen';
import PostsScreen from './screens/main/PostsScreen';
import CreateScreen from './screens/main/CreatePostsScreen';
import ProfileScreen from './screens/main/ProfileScreen';

import React from 'react';
import reactDom from 'react-dom';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Register">
        <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarItemStyle: {
          justifyContent: 'center',
          // alignItems: 'center',
          height: 40,
          marginTop: 9,
        },
        tabBarStyle: {
          paddingHorizontal: 40,
          height: 83,
          borderTopWidth: 1,
          borderTopColor: '#C0C0C0',
        },
      }}
    >
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focuses, size, color }) => (
            <SimpleLineIcons name="grid" size={24} color={color} />
          ),
          headerRight: () => (
            <Ionicons style={{ marginRight: 10 }} name="exit-outline" size={26} color="#BDBDBD" />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focuses, size, color }) => (
            <View style={styles.addBtn}>
              <AntDesign name="plus" size={20} color="white" />
            </View>
          ),
        }}
        name="Create"
        component={CreateScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focuses, size, color }) => <Feather name="user" size={24} color={color} />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    width: 70,
    height: 40,
    backgroundColor: '#FF6C00',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
