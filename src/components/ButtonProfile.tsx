import React from 'react';
import { View, Pressable, Text, StyleSheet, Image } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.text1}>Chỉnh sửa</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text2}>Chia sẻ trang cá nhân</Text>
      </Pressable>
      <View style={styles.addImgCon}>
        <Image source={require('../../assets/invite.png')} 
                className='w-[15px] h-[15px]'
                resizeMode='contain'
            />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap:5,
    marginHorizontal: 'auto'
  },
  button: {
    width: 150,
    height: 35,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 8,
  },
  text1:{
    fontWeight: 'bold'
  },
  text2:{
    fontWeight: 'bold',
    fontSize: 11
  },
  addImgCon:{
    width: 35,
    height: 35,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default MyComponent;
