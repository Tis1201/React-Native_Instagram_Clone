import { StyleSheet, Text, View, Image} from 'react-native'
import {AntDesign, FontAwesome5} from '@expo/vector-icons'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const HeaderFeed = () => {
  return (
    <SafeAreaView >
      <View className='bg-white flex-row items-center justify-between '>
      <Image 
      source={{uri: 'https://th.bing.com/th/id/OIP.opttjUMwMi1itBRzUdIbqAHaEK?rs=1&pid=ImgDetMain'}}
      className='w-[110px] h-[50px] ml-3 '
      resizeMode='contain'
      />
      <View className='flex-row mr-4'>
        <AntDesign name='hearto' size={20} />
        <FontAwesome5 name="facebook-messenger" size={24} color="white" />
        <Image source={require('../../assets/messenger.png')} 
            className='w-[20px] h-[20px]'
            resizeMode='contain'
        />
      </View>
      </View>
      

    </SafeAreaView>
  )
}

export default HeaderFeed

const styles = StyleSheet.create({})