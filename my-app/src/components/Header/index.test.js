import { render, screen } from '@testing-library/react';
import Header from './index';
import { test, expect } from '@jest/globals'
import PageHeader from '../PageHeader';
import CountdownTimer from '../CountdownTimer';
import UsernameIndicator from '../UsernameIndicator';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  
  
  render(<Header />);
  
 
});
/*
render header 
parse a component for page type 



*/ 