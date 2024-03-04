import * as React from 'react';
import { View, Text, Image, Pressable, ScrollView, StyleSheet} from 'react-native';
import { Camera, Code, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';

const AddDevicePage = () => {
    const { hasPermission, requestPermission } = useCameraPermission()
    const device = useCameraDevice('back')

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes: Code[]) => {
          console.log(`Scanned ${codes[0].value} codes!`)
        }
    })

    React.useEffect(() => {
        requestPermission();
    },[])
    if (device == null){
        return (
            <View>
                <Text>Device not found</Text>
            </View>
        );
    } 
    
    return (
        <Camera 
            style={StyleSheet.absoluteFill} 
            device={device} 
            isActive={true}
            codeScanner={codeScanner}/>
    );
};

export default AddDevicePage;