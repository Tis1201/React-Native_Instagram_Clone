import { Image, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker';

const CreatePost = () => {
// const [caption, setcaption] = useState('Have not a caption')
const [image, setImage] = useState<string | null>(null);

const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};
return (
  <SafeAreaView >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View className='p-3 items-center'>
        {image ? (
          <Image 
            source={{ uri: image }}
            className='w-52 aspect-[3/4] rounded-lg bg-slate-300'
          />
        ) : (
          <View className='w-52 aspect-[3/4] rounded-lg bg-slate-300'/>
        )}
      <Text 
        onPress={pickImage}
        className='text-blue-500 font-semibold m-5'
      >
        Change
      </Text>
      <TextInput placeholder='What is on your mind!' 
      // value={caption}
      // onChangeText={(newValue) => setcaption(newValue)}
        className='w-full p-3 min-h-28 bg-white'
        style={{textAlignVertical: 'top'}}
        multiline
      />
      <View className='w-full mt-2'>
        <Pressable className='bg-blue-500 w-full p-3 rounded-md items-center mt-4'>
          <Text className='text-white font-semibold'>Share</Text>
        </Pressable>
      </View>

    </View>
    </TouchableWithoutFeedback>
  </SafeAreaView>
)
}

export default CreatePost

const styles = StyleSheet.create({})