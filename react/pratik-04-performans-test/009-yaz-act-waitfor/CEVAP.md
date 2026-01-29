```tsx
await userEvent.click(screen.getByRole('button', { name: /kaydet/i }));
await waitFor(() => expect(screen.getByText('Güncellendi')).toBeInTheDocument());
```