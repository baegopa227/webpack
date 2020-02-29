//CommonJS 스펙의 모듈을 가져오는 방법: require.  module.exports로 배포를 해야 require로 사용가능
//lodash.js파일에 required된 부분을 찾음(lodash.js에서 연쇄적으로 찾음)

var _ = require('lodash');
// es6의 named import 방식
// es6 named import는 {} 안에 동일한 이름
import {area, circumference} from './js/circle';
// es6 default import는 {}가 없고 이름을 마음대로 바꿀 수 있다.
import volume from './js/cube';



import './style.css'
import './hello..scss'
//webpack이 lodash와 style.css를 로드하는데, style.css를 로드할 때 css-in-js(js안에 css를 변수로 적용)


const component = () => {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!'], ' ');

  return element;
}
console.log('area: ', area(5));
console.log('circum',circumference(5));
console.log('volume', volume(5));
document.body.appendChild(component());