import { View, Text } from 'react-native';

const Category = ({ item }) => {
  return (
    <View className='px-4 py-2 my-5 mr-2 rounded-md bg-card'>
      <Text className='capitalize text-text_primary'>{item}</Text>
    </View>
  );
};

export default Category;
