import { render, screen } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom";
describe('MyComponent', () => {
  test('should display the correct text', () => {
    render(<App />);
    expect(screen.getByText('kv learning platform')).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
 

 