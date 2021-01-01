// const odd = "홀수입니다";
// const even = '짝수입니다';

// module.exports = {
//     odd,
//     even,
// };

console.log(require.main === module);

exports.odd = "홀수입니다";
exports.even = "짝수입니다";

exports.exfunc = () => console.log('나는 함수입니다.');