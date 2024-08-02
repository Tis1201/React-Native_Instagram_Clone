import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import ListUserPost from './ListUserPost'

const UserPost = () => {
  return (
    <View style={styles.container} >
        <Pressable>
            <Image source={require('../../assets/rubik.png')} 
                className='w-[20px] h-[20px]'
                resizeMode='contain'
            />

        </Pressable>
        <Pressable>
            <Image source={require('../../assets/video.png')} 
                    className='w-[20px] h-[20px]'
                    resizeMode='contain'
            />
        </Pressable>
        <Pressable>
            <Image source={require('../../assets/user1.png')} 
                className='w-[20px] h-[20px]'
                resizeMode='contain'
            />
        </Pressable>

    </View>
  )
}

export default UserPost

const styles = StyleSheet.create({
    container:{
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:5,

    }
})