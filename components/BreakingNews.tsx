import { View, Text } from 'react-native';
import React from 'react';
import NewsCardLarge from './NewsCardLarge';

// TODO: Fix this type
const BreakingNews = (news: any) => {
  return (
    <View>
      <NewsCardLarge news={news} />
    </View>
  );
};

export default BreakingNews;
