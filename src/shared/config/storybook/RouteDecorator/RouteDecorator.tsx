import { Story } from '@storybook/react';
import { Themes } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = (StoryComponent: Story) => {
  return (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
    )
}