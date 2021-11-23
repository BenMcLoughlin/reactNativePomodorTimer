import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';

export function RoundedButton({ style = {}, textStyle = {}, size = 125, ...props }) {
    return (
        <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
            <Text style={[styles().text]}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = (size) =>
    StyleSheet.create({
        radius: {
            borderRadius: size / 2,
            width: size,
            height: size,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#fff',
            borderWidth: 2,
        },
        text: {
            color: '#fff',
            fontSize: size / 3,
        },
    });