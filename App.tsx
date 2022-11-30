import * as React from 'react';
import { isIE, isChrome, isFirefox, OsTypes } from 'react-device-detect';
import BrowserChecker from './BrowserChecker';

console.log(OsTypes);

export default function App() {
  if (isIE)
    return <div> IE is not supported. Download Chrome/Opera/Firefox </div>;

  var sUsrAg = navigator.userAgent;

  console.log('DA', isFirefox);
  console.log('DA', isChrome);
  console.log('NU', sUsrAg);

  return (
    <div>
      <BrowserChecker>
        <h1>Hello StackBlitz!</h1>
      </BrowserChecker>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
