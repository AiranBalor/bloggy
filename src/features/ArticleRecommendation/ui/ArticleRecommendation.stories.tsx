import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Article, ArticleType } from 'entities/Article';
import { UserRoles } from 'entities/User';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleRecommendation } from './ArticleRecommendation';

const articleExample: Article = {
  id: '1',
  title: 'Mock Title',
  subtitle: 'Mock subtitle',
  createdAt: '12.12.12',
  views: 100500,
  blocks: [],
  type: [ArticleType.ALL],
  user: {
    id: '1',
    username: 'mock-username',
    roles: [UserRoles.ADMIN],
    avatar: 'https://avatars.mds.yandex.net/i?id=e724f01fd26c7d79e6225178132680df0da309be-8253954-images-thumbs&n=13',
  },
  img: 'https://avatars.mds.yandex.net/i?id=a4b62169169c88566f08186341640e6b9c635f31-8548977-images-thumbs&n=13',
};

export default {
  title: 'features/ArticleRecommendation',
  component: ArticleRecommendation,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { ...articleExample, id: '1' },
          { ...articleExample, id: '2' },
          { ...articleExample, id: '3' },
        ],
      },
    ],
  },
} as ComponentMeta<typeof ArticleRecommendation>;

const Template: ComponentStory<typeof ArticleRecommendation> = (args) => <ArticleRecommendation {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
