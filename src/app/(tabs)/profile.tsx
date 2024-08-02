import { StyleSheet, Text, View, Image, Pressable,useWindowDimensions,Platform, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Octicons from '@expo/vector-icons/Octicons';
import React from 'react'
import Story from '../../components/Story';
import ButtonProfile from '../../components/ButtonProfile';
import AddStoryProfile from '../../components/AddStoryProfile';
import UserPost from '../../components/UserPost';
import UserPostFile from '../../components/UserPostFile';
import posts from '../../../assets/data/posts.json'

const ProfileScreen = () => {
  const windowWidth = useWindowDimensions().width;
  return (
    <SafeAreaView 
      style={{
      backgroundColor: 'white',
      flex:1
      }}>
      <View >
        <View className='flex-row justify-between m-4 items-center'>
          <View className=' '
          style={{width: windowWidth/2}}
          >
            <Pressable className='flex-row gap-1 items-center '>
              <Image 
                source={require('../../../assets/lock.png')} 
                className='w-[13px] h-[13px]'
              />
              <Text 
              className='font-bold text-[25px] flex-shrink'
              numberOfLines={1} 
              ellipsizeMode="tail"
              >
              rainny1201
              </Text>
              <Image 
                source={require('../../../assets/down-arrow.png')} 
                className='w-[13px] h-[13px]'
              />
            </Pressable>
          </View>

          <View className='flex-row gap-8 items-center justify-end pr-9'
            style={{width: windowWidth/2}}
          >
            <View className='relative'>
              <Image 
                source={require('../../../assets/threads.png')} 
                className='w-[25px] h-[25px]'
              />
              <View className='absolute right-[-11px] top-[-7px]'>
                <View className='bg-red-500 w-[17px] h-[17px] rounded-full items-center justify-center'>
                    <Text 
                    className=' font-semibold text-[12px] text-white'
                    >
                      6
                    </Text>
                </View>
              </View>
            </View>
    
        
            <Image 
                source={require('../../../assets/more.png')} 
                className='w-[25px] h-[25px]'
            />
            <Image 
                source={require('../../../assets/menu.png')} 
                className='w-[25px] h-[25px]'
            />
          </View>
        </View>
        <View className='flex-row'>
          <View className='mr-4'
            style={{
              marginTop: Platform.OS === 'ios' ? 50 : 15
            }}
          >
          <View className='ml-4 ios:mt-[-27px] mt-2 relative '>
            <View className="relative">
            <Image 
            source={require('../../../assets/mouse.jpg')} 
            className="w-[80px] h-[80px] rounded-full"
            resizeMode="contain"
            />
            <View className="absolute right-[-8px] ios:right-[-5px] bottom-[-3px] w-[32px] h-[32px] bg-white rounded-full items-center justify-center">
              <Image 
                source={require('../../../assets/add.png')} 
                className="w-[26px] h-[26px] rounded-full"
                resizeMode="contain"
              />
            </View>

            </View>
            <Text className='my-3 text-[15px] ml-1 font-semibold'
            >
              Hoài Vũ
            </Text>
        </View>
        </View>
          <View className='flex-row  items-center  '
            style={{
              width:260, 
              justifyContent:'space-between',
              paddingRight: Platform.OS === 'ios' ? 10 : 0,
              paddingLeft:  Platform.OS === 'android' ? 10 : 10,
              paddingVertical: Platform.OS === 'android' ? 35 : 0,
              marginLeft: 4,
              paddingBottom: Platform.OS === 'android' ? 65 : 25,
              
            }}
          >
            <View className='items-center'>
              <Text className='font-bold' style={{fontSize:14}}>3</Text>
              <Text className='text-[13px]'>bài viết</Text>
            </View>
            <View className=' items-center' >
              <Text className='font-bold' style={{fontSize:14}}>55</Text>
              <Text className='text-[13px]'>người theo dõi</Text>
            </View>
            <View className='items-center '>
              <Text className='font-bold' style={{fontSize:14}}>14</Text>
              <Text className='text-[13px]'>đang theo dõi</Text>
            </View>
          </View>
          
        </View>
      </View>
      <ButtonProfile />
      <AddStoryProfile />
      <UserPost />
      <View className='' style={styles.containImg}>
        <FlatList 
        data={posts}
        renderItem={({ item }) => <UserPostFile post={item} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
        key={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{
          paddingBottom: Platform.OS === 'ios'? 0 : 0,
          marginTop:22
        }}
        showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>


  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  separator: {
    height: 1, // Điều chỉnh chiều cao của separator để tạo khoảng cách giữa các hàng
  },
  row: {
    justifyContent: 'space-between', // Đảm bảo các cột trong một hàng được phân cách đều nhau
    marginBottom: 26, // Tạo khoảng cách giữa các hàng
  },
  containImg:{
    paddingBottom:300
  }
})