import React from 'react';
import {Text, View} from 'react-native';
import {Microfront1Card} from 'microfront1-rn';
import {metricasStyles as styles} from '../styles/metricas.styles';

export function MicrofrontsSecao(): React.JSX.Element {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Microfronts</Text>
      <Microfront1Card title="MF1 via Microapp2" />
    </View>
  );
}
