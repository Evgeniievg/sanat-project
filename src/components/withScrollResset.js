import React, { useEffect } from 'react';

const withScrollReset = (WrappedComponent) => {
  const ScrollReset = (props) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ScrollReset;
};

export default withScrollReset;
