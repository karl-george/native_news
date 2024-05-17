import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  const query = useLocalSearchParams();

  return (
    <SafeAreaView className='h-full bg-primary'>
      {/* <FlatList /> */}
    </SafeAreaView>
  );
};

export default Search;
