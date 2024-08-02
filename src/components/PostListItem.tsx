import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import posts from '../../assets/data/posts.json'
import {AntDesign, Ionicons, Feather} from '@expo/vector-icons'
import { AdvancedImage } from 'cloudinary-react-native';
import { Cloudinary } from "@cloudinary/url-gen";
import { sepia } from "@cloudinary/url-gen/actions/effect";

interface Post {
    id: string;
    image_url: string;
    caption: string;
    user: {
      id: string;
      avatar_url: string;
      image_url: string;
      username: string;
    };
  }

const PostListItem = ({ post }: { post: Post }) => {
  const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    }
  });

  // Use the image with public ID, 'front_face'.
    const myImage = cld.image('front_face');

  // Apply the transformation.
    myImage
    .effect(sepia());  // Apply a sepia effect.
    return (
        <View className='bg-white'>
          <View className='flex-row gap-2 items-center p-2'>
            <Image 
              source={{uri: post.user.image_url}}
              className='w-12 aspect-square rounded-full'
            />
            <Text className='font-semibold'>{post.user.username}</Text>
          </View>
          <AdvancedImage cldImg={myImage} className='w-full aspect-[4/3]'/>
          {/* <Image 
            source={{uri:post.image_url}}
            className='w-full aspect-[4/3]'
          /> */}
          <View className='flex-row justify-between mx-2 mt-1 p-1'>
            <View className='flex-row gap-3'>
              <AntDesign name='hearto' size={20} />
              <Ionicons name='chatbubble-outline' size={20} />
              <Feather name='send' size={20} />
            </View>
            <Feather name='bookmark' size={20} className='ml-auto'/>
          </View>
        </View>
      )
}

export default PostListItem

const styles = StyleSheet.create({})