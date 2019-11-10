module.exports = {
  name: 'rich-stock-photos',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/rich-stock/photos',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
