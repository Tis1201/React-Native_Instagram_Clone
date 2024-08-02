import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Story from './Story';
import UserOnline from './UserOnline';

const UserHeader = () => {
  return (
    <View className=''>
      <View className='relative'>
        <Story text='Tin của bạn'/>
      </View>
      {/* <View className='relative'>
        <UserOnline />
      </View> */}
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({});
