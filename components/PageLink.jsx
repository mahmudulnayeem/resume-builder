import Link from 'next/link';
import React from 'react';

import NavBarItem from './NavBarItem';

const PageLink = ({ children, href, className, icon, tabIndex, testId }) => {
  return (
    <Link legacyBehavior href={href}>
      <a className='text-decoration-none'>
        <NavBarItem href={href} className={className} icon={icon} tabIndex={tabIndex} testId={testId}>
          {children}
        </NavBarItem>
      </a>
    </Link>
  );
};

export default PageLink;
