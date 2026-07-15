import React from 'react';
import {View} from 'react-native';
import {AppBar} from 'shared-rn';
import {useMetricasLista} from '../../hooks/use-metricas-lista';
import {TabelaMetricas} from '../components/tabela-metricas';
import {MicrofrontsSecao} from '../components/microfronts-secao';
import {metricasStyles as styles} from '../styles/metricas.styles';

export type Microapp2ScreenProps = {
  title?: string;
};

/**
 * Thin screen: hooks + components only. No data useEffect here.
 */
export function Microapp2Screen({
  title = 'Microapp 2',
}: Microapp2ScreenProps): React.JSX.Element {
  const {metricas, isLoading} = useMetricasLista();
  return (
    <View style={styles.container}>
      <AppBar title={title} subtitle="microapp2-rn" />
      <TabelaMetricas metricas={metricas} isLoading={isLoading} />
      <MicrofrontsSecao />
    </View>
  );
}
