import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Foundation from '@expo/vector-icons/Foundation';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { backgroundColor: 'white' },
      }}
    >
      <Tabs.Screen 
        name='index'
        options={{
          headerTitle: 'Home',
          tabBarIcon: ({color}) => (
          <Foundation name="home" size={26} color={color} />
          ),


        }}
      />
            <Tabs.Screen 
        name='new'
        options={{
          headerTitle: 'New',
          tabBarIcon: ({color}) => (
            <Octicons name="diff-added" size={26} color={color} />
        ),

        }}
      />
            <Tabs.Screen 
        name='profile'
        options={{
          headerTitle: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesome name="user-circle-o" size={26} color={color} />
        ),

        }}
      />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})