import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#e7e7e7',
        margin: 10,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#434343',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 50
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#dbdbdb'
    },

    iconContainer: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 50
    },

    destinationText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '500'
    }
});

export default styles;