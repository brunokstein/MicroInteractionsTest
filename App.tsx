import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Pan } from './src/components/Pan';
import { Pinch } from './src/components/Pinch';
import { Fling } from './src/components/Fling';
import { Touches } from './src/components/Touches';
import { Rotation } from './src/components/Rotation';
import { LongPress } from './src/components/LongPress';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Fling />
    </GestureHandlerRootView>
  );
}
