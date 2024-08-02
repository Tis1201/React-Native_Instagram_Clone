import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
type StoryProps = {
  text: string;

};

const Story = ({text}: StoryProps) => {
  return (
    <View className='ml-4 ios:mt-[-27px] mt-2 relative'>
        <View className="relative">
        <Image 
        source={require('../../assets/mouse.jpg')} 
        className="w-[70px] h-[70px] rounded-full"
        resizeMode="contain"
        />
        <View className="absolute right-[320px] ios:right-[286px] bottom-[-3px] w-[32px] h-[32px] bg-white rounded-full items-center justify-center">
          <Image 
            source={require('../../assets/add.png')} 
            className="w-[26px] h-[26px] rounded-full"
            resizeMode="contain"
          />
        </View>

        </View>
        <Text className={'my-3 text-[12px] ml-1.5'}
        >
          {text}
        </Text>
    </View>
 
  )
}

export default Story

const styles = StyleSheet.create({})