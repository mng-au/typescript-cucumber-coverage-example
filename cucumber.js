// * Order of require is important
var common = [
  '--require-module ts-node/register',
  '--require features/**/*.ts'
].join(' ')

module.exports = {
  default: common,
}