import React, { useState } from 'react';
import { StyleSheet, Text, View, Vibrate, Platform, Vibration } from 'react-native';

import { spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './Timing';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

const DEFAULT_TIME = .1;

export function Timer({ focusSubject, setFocusSubject }) {
    useKeepAwake();
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(DEFAULT_TIME);

    const changeTime = (min) => {
        setMinutes(min);
        setProgress(1);
        setIsStarted(false);
    };

    const vibrate = () => {
        if (Platform.OS === 'ios') {
            const interval = setInterval(() => Vibration.vibrate(), 1000);
            setTimeout(() => clearInterval(interval), 1000);
        } else {
            Vibration.vibrate(10000);
        }
    };

    const onEnd = () => {
        vibrate();
        setMinutes(DEFAULT_TIME);
        setProgress(1);
        setIsStarted(false);
        setFocusSubject(null);
    };

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
