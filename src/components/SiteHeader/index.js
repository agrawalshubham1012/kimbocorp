import React from 'react';
import { Layout, Menu,  Avatar, Image,Button } from 'antd';
import styles from './SiteHeader.module.css';
const { Header} = Layout;

const SiteHeader = (props) => {
  return (
    <Header style={{backgroundColor:'#fff'}}>
        <Avatar className={styles.logo} style={{ color: '#000', backgroundColor: '#fff' }}>K<span style={{color:'#3a5f8a'}}>C</span></Avatar>
    {/* <div className={styles.logo} >KC</div> */}
    <Menu  style={{paddingLeft:200,width:'65%',float:'left'}} theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key={1}>Home</Menu.Item>
      <Menu.Item key={2}>About Us</Menu.Item>
      <Menu.Item key={3}>Topics</Menu.Item>
    </Menu>
    <Menu style={{width:'20%',float:'left'}} theme="light" mode="horizontal" >
      <Menu.Item key={4} style={{position:'absolute',right:60}}><Button style={{backgroundColor:'#7f2217',color:'#fff'}} shape="round" >Chat With Us</Button></Menu.Item>
    </Menu>
    
  </Header>
  );
}

export default SiteHeader;