import { StyleSheet,Platform } from 'react-native';

export default StyleSheet.create({
    MainContainer: {
        // Setting up View inside content in Vertically center.
        justifyContent: 'center',
        flex: 1,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        // padding: 5,
        backgroundColor: '#fff',
        marginTop: 0
    },
    textViewContainer: {
        textAlignVertical: 'center',
        padding: 1,
        fontSize: 18,
        color: '#000',
    },
    textView: {
        textAlignVertical: 'center',
        padding: 1,
        fontSize: 13,
        color: '#000',
    },
    avatar: {
        marginTop: 2,
        width: 50,
        height: 50
    },
    barcode: {
        marginTop: 10,
        marginBottom: 10,
        width: 300,
        height: 100
    },
    textDetail: {
        textAlignVertical: 'center',
        padding: 1,
        fontSize: 30,
    },
    barcodeContianer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        margin: 20,
    },
    moadalContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    }
});