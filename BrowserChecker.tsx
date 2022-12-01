import * as React from 'react';

const useBrowserChecker = () => {
  const [currentBrowser, setCurrentBrowser] = React.useState(null);

  React.useEffect(() => {
    setCurrentBrowser(navigator.userAgent);
  }, []);

  const isOld = false;

  return [currentBrowser, isOld];
};

const BrowserChecker = (props: any) => {
  const { children } = props;
  const [currentBrowser] = useBrowserChecker();

  console.log('curr', currentBrowser);
  return (
    <div>
      <h1>{currentBrowser}</h1>
      {children}
    </div>
  );
};

export default BrowserChecker;
