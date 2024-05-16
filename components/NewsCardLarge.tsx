import { NewsArticle } from '@/typings';
import { View, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

// TODO: Fix this type
const NewsCardLarge = ({ newsArticle }: NewsArticle) => {
  const { title, description, image_url, source_id } = newsArticle;

  return (
    <Animatable.View className='mt-2 mr-5 rounded-md bg-card w-[250px] h-full'>
      <View className='gap-2 p-3'>
        <Image
          src={image_url}
          className='w-[225px] h-[150px]'
          resizeMode='cover'
        />
        <Text className='text-text_primary'>{title.substring(0, 60)}...</Text>
        <Text className='text-sm text-text_secondary'>
          {description.substring(0, 80)}...
        </Text>
        <View className='flex-row justify-between'>
          <Text className='text-[10px] text-text_primary'>
            {source_id.toUpperCase()}
          </Text>
          <Text className='text-[10px] text-text_primary'>Date</Text>
        </View>
      </View>
    </Animatable.View>
  );
};

export default NewsCardLarge;
