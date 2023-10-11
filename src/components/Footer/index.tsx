import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear}北明软件开发部门Myc出品`}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'Myc Blog Link',
          href: 'http://www.ycjysummer.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Mao1chen',
          blankTarget: true,
        },
        {
          key: 'myc-admin',
          title: 'Myc Blog Admin',
          href: 'http://www.ycjysummer.com:8094',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
