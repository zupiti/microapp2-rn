import {StyleSheet} from 'react-native';
import {colors, spacing} from 'shared-rn';

export const metricasStyles = StyleSheet.create({
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
  emptyLabel: {
    fontSize: 14,
    color: colors.text,
    opacity: 0.7,
  },
});
