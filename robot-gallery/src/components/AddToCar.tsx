import React from 'react';
const withAddToCart = (ChildComponent: React.ComponentType) => {
  return (props) => {
    return <ChildComponent {...props}></ChildComponent>
  };
};
