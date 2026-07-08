"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Microapp2Screen = Microapp2Screen;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _microfront1Rn = require("microfront1-rn");
var _sharedRn = require("shared-rn");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
function Microapp2Screen({
  title = 'Microapp 2'
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.container,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_sharedRn.AppBar, {
      title: title,
      subtitle: "microapp2-rn"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.section,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: styles.sectionTitle,
        children: "Tabela"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.table,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: [styles.row, styles.headerRow],
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [styles.cell, styles.headerCell, styles.colMetric],
            children: "M\xE9trica"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [styles.cell, styles.headerCell, styles.colValue],
            children: "Valor"
          })]
        }), TABLE_ROWS.map((row, index) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: [styles.row, index % 2 === 1 ? styles.rowAlt : null],
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [styles.cell, styles.colMetric],
            children: row.metric
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [styles.cell, styles.colValue],
            children: row.value
          })]
        }, row.id))]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.section,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: styles.sectionTitle,
        children: "Microfronts"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_microfront1Rn.Microfront1Card, {
        title: "MF1 via Microapp2"
      })]
    })]
  });
}
const styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: _sharedRn.colors.surface,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: _sharedRn.colors.border,
    marginVertical: _sharedRn.spacing.xs
  },
  section: {
    padding: _sharedRn.spacing.md
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: _sharedRn.colors.text,
    marginBottom: _sharedRn.spacing.sm
  },
  table: {
    borderWidth: 1,
    borderColor: _sharedRn.colors.border,
    borderRadius: 8,
    overflow: 'hidden'
  },
  row: {
    flexDirection: 'row',
    paddingVertical: _sharedRn.spacing.sm,
    paddingHorizontal: _sharedRn.spacing.sm
  },
  headerRow: {
    backgroundColor: _sharedRn.colors.primaryDark
  },
  rowAlt: {
    backgroundColor: _sharedRn.colors.background
  },
  cell: {
    fontSize: 13,
    color: _sharedRn.colors.text
  },
  headerCell: {
    color: _sharedRn.colors.onPrimary,
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