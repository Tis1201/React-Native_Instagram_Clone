import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const AddStoryProfile = () => {
  return (
    <View style={styles.container}>
        <View style={styles.borDerAdd}>
            <Image source={require('../../assets/plus.png')} 
                className='w-[22px] h-[22px]'
                resizeMode='contain'
            />
        </View>
        <Text >Mới</Text>

    </View>
    
  )
}

export default AddStoryProfile

const styles = StyleSheet.create({
    container:{
        padding: 10,
        height:90,
        width:90,
        alignItems: 'center'
    },
    borDerAdd:{
        height:65,
        width:65,
        borderColor:'rgba(239, 239, 239, 0.81)',
        borderWidth: 3,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2
    }
})