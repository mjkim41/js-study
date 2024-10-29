// truthy, falsy : js는 논리나 아닌 데이터를 논리로 표현할 수 있다.
// *********** 0, '', null, undefined, NaN - false로 취급함. 나머지는 전부 true
if (false) console.log('false입니다.');
if (0) console.log('숫자 0');
if (null) console.log('null입니다!');
if (undefined) console.log('undefined입니다!');
if (NaN) console.log('NaN입니다!');
if ('') console.log('\'\'입니다!');

if (1) console.log('1입니다!');
if (' ') console.log('\' \'입니다!');
if ('-100') console.log('-100입니다!');
if ([1,2,3]) console.log('[1,2,3]입니다');
if (function () {}) console.log(`함수입니다`);