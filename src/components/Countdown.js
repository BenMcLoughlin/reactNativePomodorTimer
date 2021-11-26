import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (minutes) => minutes * 60 * 1000;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 20, isPaused = true, setProgress }) => {
    const [millis, setMillis] = useState(minutesToMillis(minutes));

    const interval = React.useRef(null);
    const minute = Math.floor(millis / 1000 / 60) % 60;
    const seconds = Math.floor((millis / 1000) % 60);

    const countDown = () => {
        setMillis((time) => {
            if (time === 0) {
                return time;
            }
            const timeLeft = time - 1000;
            setProgress(timeLeft / minutesToMillis(minutes));
            return timeLeft;
        });
    };

    useEffect(() => {
        if (isPaused) return;

        interval.current = setInterval(countDown, 1000);
        return () => clearInterval(interval.current);
    }, [isPaused]);

    return (
        <View>
            <Text style={styles.text}>
                {formatTime(minute)}:{formatTime(seconds)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxl,
        fontWeight: 'bold',
        color: colors.white,
        padding: spacing.lg,
        backgroundColor: 'rgba(94, 132, 226,0.3)',
    },
});
