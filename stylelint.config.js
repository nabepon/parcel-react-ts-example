module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'order/properties-order': require('stylelint-config-idiomatic-order').rules['order/properties-order'],
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global'],
    }],
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['/.*/'],
    }],
  },
};