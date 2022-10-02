import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { Switch, SwitchThumb } from '../index';

describe('Switch', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(
        <Switch defaultChecked id="s1">
          <SwitchThumb />
        </Switch>,
      );
      root.unmount();
    });
  });
});
