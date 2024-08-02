import { StyleSheet, Text, View,Image,Dimensions, useWindowDimensions } from 'react-native'

import React from 'react'
interface Post {
    id: string;
    image:string;
    image_url: string;
    caption: string;
    user: {
      id: string;
      avatar_url: string;
      image_url: string;
      username: string;
    };
  }

const UserPostFile = (  { post }: { post: Post }) => {
  const widthScreen = useWindowDimensions().width;
  return (
    <View style={[styles.container]}>
        <Image 
            source={{uri:post.image_url}}
            style={[styles.image,{width:widthScreen/3, height: widthScreen/3}]}
            resizeMode='cover'
        />
    </View>
  )
}

export default UserPostFile

const styles = StyleSheet.create({
    container:{
        marginTop:-25,
        marginRight:1,
        // borderWidth: 10,
        // borderColor: 'red'

    },
    image:{
      
    }
})