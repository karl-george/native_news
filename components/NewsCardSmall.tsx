import { postedAt } from '@/lib/utils';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

const NewsCardSmall = ({ newsArticle }) => {
  const { title, image_url, source_id, pubDate, category, link } = newsArticle;

  return (
    <View className='mb-3'>
      {/* <TouchableOpacity onPress={() => Linking.openURL(link)}> */}
      <TouchableOpacity>
        <View className='w-full h-[140px] p-3 rounded-md bg-card flex-row'>
          <View>
            <Image
              src={image_url}
              className='w-[140px] h-[116px] rounded-md mr-3'
              resizeMode='cover'
            />
          </View>
          <View className='h-[115px] justify-between w-[185px]'>
            <Text className='text-xs capitalize text-text_secondary'>
              {category}
            </Text>
            <Text className='text-lg leading-5 text-text_primary'>
              {title.substring(0, 50)}...
            </Text>
            <View className='flex-row justify-between'>
              <Text className='text-xs text-text_secondary'>{source_id}</Text>
              <Text className='text-xs text-text_secondary'>
                {postedAt(pubDate)}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewsCardSmall;
