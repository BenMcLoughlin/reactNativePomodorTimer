import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';

export function Focus({ setFocusSubject }) {
    const [subject, setSubject] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>What would you like to focus on?</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={{ flex: 1, marginRight: 20 }}
                        onSubmitEditing={({ nativeEvent }) => setSubject(nativeEvent.text)}
                    />
                    <RoundedButton size={50} onPress={() => setFocusSubject(subject)} text={'+'} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
    },
    titleContainer: {
        flex: 0.5,
        padding: spacing.md,
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: spacing.lg,
    },
    inputContainer: {
        paddingTop: spacing.md,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
