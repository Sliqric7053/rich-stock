module.exports = {
  name: 'rich-stock-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/rich-stock/core',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
