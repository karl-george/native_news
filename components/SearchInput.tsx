import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchInput = () => {
  return (
    <View className='flex-row items-center justify-between h-10 px-4 my-6 border-gray-700 rounded-md border-[1px] bg-card w-72 focus:border-accent'>
      <TextInput
        placeholder='Search for news...'
        placeholderTextColor='#6A717A'
        className='text-text_primary'
      />
      <TouchableOpacity className=''>
        <Feather name='search' size={24} color='#6A717A' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
