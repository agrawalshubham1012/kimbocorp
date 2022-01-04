import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import SiteHeader from '../../components/SiteHeader'
import styles from './SiteContainer.module.css';
const {Content, Footer } = Layout;

const SiteContainer = ({children}) => {
  return (
    <Layout className="layout" style={{backgroundColor:'#fff'}}>
    <SiteHeader/>
    <Content style={{ padding: '0 50px' }}>
      <div style={{minHeight:window.innerHeight-65}} className={styles.siteLayoutContent}>{children}</div>
    </Content>
  </Layout>
  );
}

export default SiteContainer;