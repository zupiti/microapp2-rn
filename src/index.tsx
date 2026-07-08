import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Microfront1Card} from 'microfront1-rn';
import {AppBar, colors, spacing} from 'shared-rn';

export type Microapp2ScreenProps = {
  title?: string;
};

type TableRow = {
  id: string;
  metric: string;
  value: string;
};

const TABLE_ROWS: TableRow[] = [
  {id: '1', metric: 'CPU', value: '42%'},
  {id: '2', metric: 'Memória', value: '68%'},
  {id: '3', metric: 'Rede', value: '12 Mb/s'},
  {id: '4', metric: 'Disco', value: '81%'},
];

export function Microapp2Screen({
  title = 'Microapp 2',
}: Microapp2ScreenProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppBar title={title} subtitle="microapp2-rn" />

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
          {TABLE_ROWS.map((row, index) => (
            <View
              key={row.id}
              style={[styles.row, index % 2 === 1 ? styles.rowAlt : null]}>
              <Text style={[styles.cell, styles.colMetric]}>{row.metric}</Text>
              <Text style={[styles.cell, styles.colValue]}>{row.value}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Microfronts</Text>
        <Microfront1Card title="MF1 via Microapp2" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    marginVertical: spacing.xs,
  },
  section: {
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  table: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  headerRow: {
    backgroundColor: colors.primaryDark,
  },
  rowAlt: {
    backgroundColor: colors.background,
  },
  cell: {
    fontSize: 13,
    color: colors.text,
  },
  headerCell: {
    color: colors.onPrimary,
    fontWeight: '700',
  },
  colMetric: {
    flex: 2,
  },
  colValue: {
    flex: 1,
    textAlign: 'right',
  },
});
