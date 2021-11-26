import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';

export function Timer({ focusSubject }) {
    const [isStarted, setIsStarted] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown isPaused={!isStarted} />
            </View>

            <View style={{ paddingTop: spacing.xxl }}></View>
            <Text style={styles.title}>Focusing on: </Text>
            <Text style={styles.task}>{focusSubject}</Text>
            <RoundedButton text={'start'} size={50} onPress={() => setIsStarted(true)} />
            <RoundedButton text={'stop'} size={50} onPress={() => setIsStarted(false)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
    },
    title: { color: colors.white, textAlign: 'center' },
    task: { color: colors.white, fontWeight: 'bold' },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
