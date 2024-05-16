import { postedAt } from '@/lib/utils';
import { NewsArticle } from '@/typings';
import { View, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

// TODO: Fix this type
const NewsCardLarge = ({ newsArticle }: NewsArticle) => {
  const { title, description, image_url, source_id, pubDate } = newsArticle;

  return (
    <Animatable.View className='mr-3'>
      <View className='w-[250px] h-[332px] p-3 rounded-md bg-card space-y-3'>
        <View>
          <Image
            src={image_url}
            className='w-full h-40 rounded-md'
            resizeMode='cover'
          />
        </View>
        <View className='h-[140px] justify-between'>
          <Text className='text-text_primary'>{title.substring(0, 40)}...</Text>
          <Text className='text-text_secondary'>
            {description.substring(0, 90)}...
          </Text>
          <View className='flex-row justify-between'>
            <Text className='text-text_primary'>{source_id}</Text>
            <Text className='text-text_primary'>{postedAt(pubDate)}</Text>
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};

export default NewsCardLarge;
