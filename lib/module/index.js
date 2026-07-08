"use strict";

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Microfront1Card } from 'microfront1-rn';
import { AppBar, colors, spacing } from 'shared-rn';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TABLE_ROWS = [{
  id: '1',
  metric: 'CPU',
  value: '42%'
}, {
  id: '2',
  metric: 'Memória',
  value: '68%'
}, {
  id: '3',
  metric: 'Rede',
  value: '12 Mb/s'
}, {
  id: '4',
  metric: 'Disco',
  value: '81%'
}];
export function Microapp2Screen({
  title = 'Microapp 2'
}) {
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [/*#__PURE__*/_jsx(AppBar, {
      title: title,
      subtitle: "microapp2-rn"
    }), /*#__PURE__*/_jsxs(View, {
      style: styles.section,
      children: [/*#__PURE__*/_jsx(Text, {
        style: styles.sectionTitle,
        children: "Tabela"
      }), /*#__PURE__*/_jsxs(View, {
        style: styles.table,
        children: [/*#__PURE__*/_jsxs(View, {
          style: [styles.row, styles.headerRow],
          children: [/*#__PURE__*/_jsx(Text, {
            style: [styles.cell, styles.headerCell, styles.colMetric],
            children: "M\xE9trica"
          }), /*#__PURE__*/_jsx(Text, {
            style: [styles.cell, styles.headerCell, styles.colValue],
            children: "Valor"
          })]
        }), TABLE_ROWS.map((row, index) => /*#__PURE__*/_jsxs(View, {
          style: [styles.row, index % 2 === 1 ? styles.rowAlt : null],
          children: [/*#__PURE__*/_jsx(Text, {
            style: [styles.cell, styles.colMetric],
            children: row.metric
          }), /*#__PURE__*/_jsx(Text, {
            style: [styles.cell, styles.colValue],
            children: row.value
          })]
        }, row.id))]
      })]
    }), /*#__PURE__*/_jsxs(View, {
      style: styles.section,
      children: [/*#__PURE__*/_jsx(Text, {
        style: styles.sectionTitle,
        children: "Microfronts"
      }), /*#__PURE__*/_jsx(Microfront1Card, {
        title: "MF1 via Microapp2"
      })]
    })]
  });
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    marginVertical: spacing.xs
  },
  section: {
    padding: spacing.md
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm
  },
  table: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    overflow: 'hidden'
  },
  row: {
    flexDirection: 'row',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm
  },
  headerRow: {
    backgroundColor: colors.primaryDark
  },
  rowAlt: {
    backgroundColor: colors.background
  },
  cell: {
    fontSize: 13,
    color: colors.text
  },
  headerCell: {
    color: colors.onPrimary,
    fontWeight: '700'
  },
  colMetric: {
    flex: 2
  },
  colValue: {
    flex: 1,
    textAlign: 'right'
  }
});
//# sourceMappingURL=index.js.map