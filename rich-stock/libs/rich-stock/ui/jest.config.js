module.exports = {
  name: 'rich-stock-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/rich-stock/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
