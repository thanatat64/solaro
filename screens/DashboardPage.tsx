import * as React from 'react';
import { View, Text, Button, Pressable, ScrollView, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'


interface DashboardPageProps {
  navigation: any;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ navigation }) => {
  const onPressBack = () => {
    navigation.navigate('HomePage'); // เมื่อกดปุ่มจะ navigate ไปยังหน้า Dashboard
  };

  return (
    <ScrollView
      style={[
        styles.container,
        {
          flexDirection: 'column'
        },
      ]}  >
      <Pressable onPress={onPressBack}>
        <FontAwesomeIcon 
          icon={ faCircleChevronLeft } 
          color={ 'black' } 
          size={ 32 }
          style={{flex: 1, marginTop: 20, marginLeft: 20}}/>
      </Pressable>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Dashboard Page</Text>
        <Button
          title='Back to Home'
          onPress={onPressBack}
        >
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff' 
  },
});

export default DashboardPage;