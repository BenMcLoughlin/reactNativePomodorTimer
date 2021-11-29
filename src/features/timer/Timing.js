import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({ changeTime }) => {
    return (
        <>
            <View>
                <RoundedButton
                    style={styles.timingButton}
                    size={75}
                    text={'10'}
                    onPress={() => changeTime(10)}
                />
            </View>
            <View>
                <RoundedButton
                    style={styles.timingButton}
                    size={75}
                    text={'15'}
                    onPress={() => changeTime(15)}
                />
            </View>
            <View>
                <RoundedButton
                    style={styles.timingButton}
                    size={75}
                    text={'20'}
                    onPress={() => changeTime(20)}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    timingButton: {
        alignItems: 'center',
        margin: 10,
    },
});
