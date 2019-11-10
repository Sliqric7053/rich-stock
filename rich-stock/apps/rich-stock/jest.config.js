module.exports = {
  name: 'rich-stock',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/rich-stock',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
