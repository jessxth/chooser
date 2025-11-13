import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Polygon } from 'react-native-svg';

type Props = {
  size?: number;
};

const Wheel: React.FC<Props> = ({ size = 200 }) => {
  const radius = size / 2;
  const strokeWidth = 40;
  const colors = ['#FF4C4C', '#FFB84C', '#4CFF4C', '#4CFFFF', '#4C4CFF'];

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ position: 'relative', alignItems: 'center' }}>
        {/* Pfeil oben mittig - um 180 Grad gedreht */}
        <View style={{ 
          position: 'absolute', 
          top: -25, 
          zIndex: 1,
          alignSelf: 'center'
        }}>
          <Svg width={30} height={30}>
            <Polygon
              points="0,0 15,30 30,0"  // Umgedreht: Spitze zeigt nach unten
              fill="red"
            />
          </Svg>
        </View>
        
        {/* Das Rad */}
        <Svg width={size} height={size}>
          {colors.map((color, i) => {
            const startAngle = i * 72;
            const endAngle = (i + 1) * 72;
            return (
              <Path
                key={i}
                d={describeArc(radius, radius, radius - strokeWidth / 2, startAngle, endAngle)}
                stroke={color}
                strokeWidth={strokeWidth}
                fill="none"
              />
            );
          })}
        </Svg>
      </View>
    </View>
  );
};

export default Wheel;