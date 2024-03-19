import { Alert } from 'react-native';
import { SERVICE } from "./config";


export const errorHandler = (serviceType: String, response: any) => {
    switch (serviceType) {
        case SERVICE.HOME:
        case SERVICE.DETAILS:
        default: {
            Alert.alert('Alert', response?.message, [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            break
        }
    }
}