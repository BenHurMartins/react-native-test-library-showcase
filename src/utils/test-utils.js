// test-utils.jsx
import React from 'react';
import {render as rtlRender} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import testingStore from '../store';

// Does it need some test values on the store? we can setup it manually here

// Overriding the render method
function render(ui, {store = testingStore, renderOptions} = {}) {
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

// re-export everything
export * from '@testing-library/react-native';
// override render method
export {render};
