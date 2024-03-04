import * as React from 'react';
import { View, Text, Image, Pressable, ScrollView, StyleSheet} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

interface HomePageProps {
  navigation: any; // ระบุชนิดข้อมูลของ navigation prop
}

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  const onPressAddDevice = () => {
    navigation.navigate('AddDevicePage'); // เมื่อกดปุ่มจะ navigate ไปยังหน้า Dashboard
  };
  const onPressDevice = () => {
    navigation.navigate('DashboardPage'); // เมื่อกดปุ่มจะ navigate ไปยังหน้า Dashboard
  };

  return (
    <ScrollView 
      style={[
        styles.container,
        {
          flexDirection: 'column'
        },
      ]}>
      <Pressable onPress={onPressAddDevice} style={{alignItems: 'flex-end'}}>
        <FontAwesomeIcon 
          icon={ faCirclePlus } 
          color={ 'black' } 
          size={ 32 } 
          style={{flex: 0.5, marginTop: 30, marginRight: 30}}/>
      </Pressable>
      <Pressable onPress={onPressDevice}>
        <View style={{alignItems: 'flex-start', margin: 40}}>
          <View style={{ flex: 1}}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/18/c0/ce/18c0cea0f590d07b6fc28c4ec8c0203a.jpg',
              }}
              style={{ width: 250, height: 250 }}
            />
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff' 
  },
});

export default HomePage;