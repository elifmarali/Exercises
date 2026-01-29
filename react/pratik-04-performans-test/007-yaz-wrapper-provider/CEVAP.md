```tsx
function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}
```
Tüm testlerde `render` yerine `renderWithTheme` kullan.