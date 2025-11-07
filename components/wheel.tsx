import React, { useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');
const WHEEL_SIZE = width * 0.8;

export default function Wheel() {
  const [options, setOptions] = useState<string[]>([]);
  const [newOption, setNewOption] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;

  const addOption = () => {
    if (newOption.trim() && options.length < 12) {
      setOptions([...options, newOption.trim()]);
      setNewOption('');
    }
  };

  const spinWheel = () => {
    if (options.length === 0 || isSpinning) return;

    setIsSpinning(true);
    
    // Zufällige Umdrehungen + Position
    const randomSpins = 5 + Math.random() * 5; // 5-10 Umdrehungen
    const segmentAngle = 360 / options.length;
    const winningSegment = Math.floor(Math.random() * options.length);
    const finalAngle = -(winningSegment * segmentAngle) - (360 * randomSpins);

    Animated.timing(spinValue, {
      toValue: finalAngle,
      duration: 4000,
      useNativeDriver: true,
    }).start(() => {
      setIsSpinning(false);
      alert(`Gewonnen: ${options[winningSegment]}`);
      spinValue.setValue(finalAngle % 360);
    });
  };

  const resetWheel = () => {
    spinValue.setValue(0);
    setOptions([]);
  };

  const rotate = spinValue.interpolate({
    inputRange: [-360, 0, 360],
    outputRange: ['-360deg', '0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      {/* Eingabe */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newOption}
          onChangeText={setNewOption}
          placeholder="Option eingeben..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.addButton} onPress={addOption}>
          <Text style={styles.buttonText}>Hinzufügen</Text>
        </TouchableOpacity>
      </View>

      {/* Rad */}
      <View style={styles.wheelContainer}>
        <Animated.View 
          style={[
            styles.wheel, 
            { transform: [{ rotate }] }
          ]}
        >
          {options.map((option, index) => {
            const segmentAngle = 360 / options.length;
            const rotation = (index * segmentAngle) - 90; // -90 damit bei 12 Uhr startet
            const color = `hsl(${(index * 360) / options.length}, 70%, 60%)`;

            return (
              <View
                key={index}
                style={[
                  styles.segment,
                  {
                    transform: [
                      { rotate: `${rotation}deg` },
                    ],
                    backgroundColor: color,
                  },
                ]}
              >
                <Text 
                  style={[
                    styles.segmentText,
                    { transform: [{ rotate: `${-rotation}deg` }] }
                  ]}
                >
                  {option}
                </Text>
              </View>
            );
          })}
        </Animated.View>
        
        {/* Zeiger */}
        <View style={styles.pointer} />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.actionButton, isSpinning && styles.disabledButton]} 
          onPress={spinWheel}
          disabled={isSpinning || options.length === 0}
        >
          <Text style={styles.buttonText}>
            {isSpinning ? 'Dreht...' : 'Drehen!'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.resetButton} 
          onPress={resetWheel}
        >
          <Text style={styles.buttonText}>Zurücksetzen</Text>
        </TouchableOpacity>
      </View>

      {/* Optionen Liste */}
      <View style={styles.optionsList}>
        <Text style={styles.optionsTitle}>Optionen ({options.length}):</Text>
        {options.map((option, index) => (
          <Text key={index} style={styles.optionItem}>
            {index + 1}. {option}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginRight: 10,
    backgroundColor: 'white',
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  wheelContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  wheel: {
    width: WHEEL_SIZE,
    height: WHEEL_SIZE,
    borderRadius: WHEEL_SIZE / 2,
    borderWidth: 4,
    borderColor: '#333',
    overflow: 'hidden',
    position: 'relative',
  },
  segment: {
    position: 'absolute',
    width: '50%',
    height: '50%',
    left: '50%',
    top: '50%',
    transformOrigin: '0% 0%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  segmentText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    width: 80,
  },
  pointer: {
    position: 'absolute',
    top: -20,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#34C759',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  disabledButton: {
    backgroundColor: '#C7C7CC',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionsList: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
  },
  optionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionItem: {
    fontSize: 16,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});