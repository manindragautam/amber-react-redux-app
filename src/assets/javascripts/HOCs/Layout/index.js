import React from 'react';

const Layout = BaseComponent => {
  const EnhancedComponent = props => (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-6">
        <BaseComponent {...props} />
      </div>
    </div>
  );

  return EnhancedComponent;
};

export default Layout;
