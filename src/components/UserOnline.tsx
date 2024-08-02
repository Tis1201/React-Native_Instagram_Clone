import { StyleSheet, Text, View, Image} from 'react-native'
import {AntDesign, FontAwesome5} from '@expo/vector-icons'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const UserOnline = () => {
  return (
        <View className='ml-4 ios:mt-[-27px] mt-2 relative'>
            <View className="relative">
            <Image 
            source={require('../../assets/mouse.jpg')} 
            className="w-[70px] h-[70px] rounded-full"
            resizeMode="contain"
            />
            <View className="absolute right-[320px] ios:right-[286px] bottom-[-3px] w-[32px] h-[32px] bg-white rounded-full items-center justify-center">
                <View className='bg-green-300 w-[22px] h-[22px] rounded-full'>

                </View>
            </View>

            </View>
            <Text className='my-3 text-[12px] ml-1.5'>Tin của bạn</Text>
        </View>
  )
}

export default UserOnline

const styles = StyleSheet.create({})