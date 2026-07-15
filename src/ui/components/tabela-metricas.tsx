import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {colors} from 'shared-rn';
import type {Metrica} from '../../entities';
import {metricasStyles as styles} from '../styles/metricas.styles';

type TabelaMetricasProps = {
  metricas: Metrica[];
  isLoading: boolean;
};

/**
 * Presentational table — data comes from the screen/hook.
 */
export function TabelaMetricas({
  metricas,
  isLoading,
}: TabelaMetricasProps): React.JSX.Element {
  if (isLoading) {
    return (
      <View style={styles.section}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }
  if (metricas.length === 0) {
    return (
      <View style={styles.section}>
        <Text style={styles.emptyLabel}>Nenhuma métrica disponível</Text>
      </View>
    );
  }
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tabela</Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell, styles.colMetric]}>
            Métrica
          </Text>
          <Text style={[styles.cell, styles.headerCell, styles.colValue]}>
            Valor
          </Text>
        </View>
        {metricas.map((row, index) => (
          <View
            key={row.id}
            style={[styles.row, index % 2 === 1 ? styles.rowAlt : null]}>
            <Text style={[styles.cell, styles.colMetric]}>{row.nome}</Text>
            <Text style={[styles.cell, styles.colValue]}>{row.valor}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
