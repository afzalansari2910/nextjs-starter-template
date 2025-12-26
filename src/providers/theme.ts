import { createTheme } from '@mantine/core';

// Neutral Mantine theme with recommended minimal settings
export const theme = createTheme({
  // Improves contrast for filled variants when color is specified
  autoContrast: true,
});
