import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './Timing';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

export function Timer({ focusSubject }) {
    useKeepAwake();
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(10);

    const changeTime = (min) => {
        setMinutes(min);
        setProgress(1);
        setIsStarted(false);
    };

    const onEnd = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown
                    minutes={minutes}
                    isPaused={!isStarted}
                    setProgress={setProgress}
                    onEnd={onEnd}
                />
            </View>

            <View style={{ paddingTop: spacing.xxl }}></View>
            <Text style={styles.title}>Focusing on: </Text>
            <Text style={styles.task}>{focusSubject}</Text>
            <View style={{ paddingTop: spacing.sm }}>
                <ProgressBar color="#5484e2" style={{ height: 10 }} progress={progress} />
            </View>
            <View style={styles.buttonWrapper}>
                <Timing changeTime={changeTime} />
            </View>
            <View style={styles.buttonWrapper}>
                <RoundedButton
                    text={isStarted ? 'pause' : 'start'}
                    onPress={() => setIsStarted(!isStarted)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
    },
    title: { color: colors.white, textAlign: 'center' },
    task: { color: colors.white, textAlign: 'center', fontWeight: 'bold' },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',

        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
