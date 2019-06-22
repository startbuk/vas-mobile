import { StyleSheet,Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        // padding: 5,
        backgroundColor: '#fff',
        marginTop: 0
    }
});