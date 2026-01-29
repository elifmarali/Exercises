```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
test('increments', async () => {
  render(<Counter />);
  expect(screen.getByText('0')).toBeInTheDocument();
  await userEvent.click(screen.getByText('Artır'));
  expect(screen.getByText('1')).toBeInTheDocument();
});
```