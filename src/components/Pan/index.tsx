import { View, } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

import { styles } from './styles';

export function Pan() {
    const position = useSharedValue(0);

    const panGesture = Gesture
        .Pan()
        .minPointers(2) //Tem que ter, no mínimo, os dois dedos para movimentar o objeto. 
        .onUpdate((event) => {
            //position.value = event.translationX
            position.value = event.translationY
            if (event.translationX >= 0) {
                console.log('INDO PARA A DIREITA!');
            } else {
                console.log('INDO PARA A ESQUERDA!');
            }
        });

    const animatedStyle = useAnimatedStyle(() => ({
        //transform: [{ translateX: position.value }]
        transform: [{ translateY: position.value }]
    }));

    return (
        <View style={styles.container}>
            <GestureDetector gesture={panGesture}>
                <Animated.View style={[styles.box, animatedStyle]} />
            </GestureDetector>
        </View>
    );
} 