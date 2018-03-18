module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-idiomatic-order',
  ],
  rules: {
    // cf https://qiita.com/hashrock/items/189db03021b0f565ae27
    'declaration-block-no-redundant-longhand-properties': [
      true,
      { ignoreShorthands: ['flex'] },
    ],
  },
};
