import React from 'react';
import { Switcher, Notification, UserAvatar } from '@carbon/react/icons';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label="Notifications"
          tooltipAlignment="center">
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User Avatar" tooltipAlignment="center">
          <UserAvatar size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
          <Switcher size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    )}
  />
);

export default TutorialHeader;
