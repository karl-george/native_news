import { View, Text, Image } from 'react-native';

// TODO: Fix this type
const NewsCardLarge = (news: any) => {
  return (
    <View className='mt-2 rounded-md bg-card'>
      <Image className='w-[175px] h-[150px]' />
      <View>
        <Text className='text-text_primary'>Headline</Text>
        <Text className='text-sm text-text_secondary'>Subtitles</Text>
        <View>
          <Text className='text-xs text-text_primary'>News Center</Text>
          <Text className='text-xs text-text_primary'>Date</Text>
        </View>
      </View>
    </View>
  );
};

export default NewsCardLarge;
