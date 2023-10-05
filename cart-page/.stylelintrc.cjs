'use strict';

module.exports = {
  extends: 'stylelint-config-standard-scss',
  rules: {
    'rule-empty-line-before': ['never', { 'ignore': ['after-comment'] }],
    'selector-id-pattern': [
      '^([a-z][-a-z0-9]*)(_{1,2}[-a-z0-9]+)*$',
      {
        message: (selector) => `Expected id selector "${selector}" to be BEM-style-case`,
      },
    ],
    'selector-class-pattern': [
      '^([a-z][-a-z0-9]*)(_{1,2}[-a-z0-9]+)*$',
      { message: (selector) => `Expected class selector "${selector}" to be BEM-style-case` },
    ],
  },
};
