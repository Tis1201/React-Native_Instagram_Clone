import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import posts from '../../../assets/data/posts.json';
import HeaderFeed from '../../components/HeaderFeed';
import UserHeader from '../../components/UserHeader';
import PostListItem from '../../components/PostListItem';

const FeedScreen = () => {
  return (
    <View className='bg-white flex-1'>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        contentContainerStyle={{
          paddingBottom: 300,
        }}
        ListHeaderComponent={
          <>
            <HeaderFeed />
            <UserHeader />
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
