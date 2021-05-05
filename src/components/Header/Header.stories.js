import React from 'react';
import Header from '.';
import { HEADER } from '../../constants/appInfo';
import ShoppingCart from '../common/Icon/ShoppingCart';
import Navigation from '../Navigation';

export default {
  title: 'Header',
  component: Header,
  argTypes: {},
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: <ShoppingCart />,
  title: HEADER.APP_TITLE,
};

export const WithNavigation = Template.bind({});
WithNavigation.args = {
  logo: <ShoppingCart />,
  title: HEADER.APP_TITLE,
  children: <Navigation navList={HEADER.NAV_LIST} />,
};
