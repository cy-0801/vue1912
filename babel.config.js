module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }],
    [
      '@babel/plugin-transform-modules-commonjs',
      {
          allowTopLevelThis: true,
      },
  ],
  ["component",
      {
          "libraryName": "mint-ui",
          "style": true
      }
  ]
  ]
}
