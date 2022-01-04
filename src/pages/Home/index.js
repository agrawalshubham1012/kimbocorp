import React, { useState } from 'react';
import { Card, Col, Row,Space,Typography } from 'antd';
import styles from './HomeStyle';
import SiteContainer from '../../components/SiteContainer'
const { Title, Paragraph, Text, Link } = Typography;


const Home = () => {

  return (
    <SiteContainer>
      <div className="site-card-wrapper">
      <Row gutter={16}>
      <Space direction="vertical" style={{flex:1/3}}>
      <Col span={8}>
        <Card title="B" headStyle={styles.headStyle} bordered={false} bodyStyle={styles.bodyStyle}  style={styles.cardStyle}>
          <Paragraph style={styles.paragraphStyle}>Business Accounting</Paragraph>
          <Paragraph style={styles.paragraphStyle}>Business Law</Paragraph>
          <Paragraph style={styles.paragraphStyle}>Business Taxes</Paragraph>
          <Paragraph style={styles.paragraphStyle}>Budget</Paragraph>
          <Paragraph style={styles.paragraphStyle}>Board Dynamics</Paragraph>
        </Card>
        </Col>
        <Col span={8}>
        <Card title="C" headStyle={styles.headStyle} bordered={false} bodyStyle={styles.bodyStyle} style={styles.cardStyle}>
          <Paragraph  style={styles.paragraphStyle}>Closing your business</Paragraph>
          <Paragraph  style={styles.paragraphStyle}>Contract Law</Paragraph>
          <Paragraph  style={styles.paragraphStyle}>Copyright</Paragraph>
          <Paragraph  style={styles.paragraphStyle}>Corporate Law</Paragraph>
        </Card>
        </Col>
    </Space>
    <Space direction="vertical" style={{flex:1/3}}>
      <Col span={8}>
        <Card title="E" headStyle={styles.headStyle} bordered={false} bodyStyle={styles.bodyStyle}  style={styles.cardStyle}>
          <Paragraph  style={styles.paragraphStyle}>Employment Law</Paragraph>
          <Paragraph  style={styles.paragraphStyle}>Equal Rights</Paragraph>
          <Paragraph  style={styles.paragraphStyle}>Employment Passes</Paragraph>
        </Card>
        </Col>
        <Col span={8}>
        <Card title="F" headStyle={styles.headStyle} bordered={false} bodyStyle={styles.bodyStyle} style={styles.cardStyle} >
          <Paragraph  style={styles.paragraphStyle}>Forming a Partnership</Paragraph>
          <Paragraph  style={styles.paragraphStyle}>Forming a Sole Proprietorship</Paragraph>
          <Paragraph  style={styles.paragraphStyle}>Forming a Pte Ltd company</Paragraph>
        </Card>
        </Col>
        <Col span={8}>
        <Card title="G" headStyle={styles.headStyle} bordered={false} bodyStyle={styles.bodyStyle} style={styles.cardStyle}>
          <Paragraph  style={styles.paragraphStyle}>Getting Government Help</Paragraph>
          <Paragraph  style={styles.paragraphStyle}>Government Agencies</Paragraph>
          <Paragraph  style={styles.paragraphStyle}>Government Programs</Paragraph>
        </Card>
        </Col>
    </Space>
    <Space direction="vertical" style={{flex:1/3}}>
       <Col span={8}>
        <Card title="H" headStyle={styles.headStyle} bordered={false} bodyStyle={styles.bodyStyle} style={styles.cardStyle}>
        <Paragraph  style={styles.paragraphStyle}>Health</Paragraph>
        <Paragraph  style={styles.paragraphStyle}>Hiring a Cofounder</Paragraph>
        </Card>
        </Col>
        <Col span={8}>
        <Card title="I" headStyle={styles.headStyle} bordered={false} bodyStyle={styles.bodyStyle} style={styles.cardStyle}>
        <Paragraph  style={styles.paragraphStyle}>Intellectual Property Basics</Paragraph>
        </Card>
        </Col>

        <Col span={8}>
        <Card title="M" headStyle={styles.headStyle} bordered={false} bodyStyle={styles.bodyStyle} style={styles.cardStyle}>
        <Paragraph  style={styles.paragraphStyle}>Managing your Business</Paragraph>
        <Paragraph  style={styles.paragraphStyle}>Marketing your Business</Paragraph>
        </Card>
        </Col>

        <Col span={8}>
        <Card title="S" headStyle={styles.headStyle} bordered={false} bodyStyle={styles.bodyStyle} style={styles.cardStyle}>
          <Paragraph  style={styles.paragraphStyle}>Sole Proprietorships</Paragraph>
          <Paragraph  style={styles.paragraphStyle}>Starting a Business</Paragraph>
          <Paragraph  style={styles.paragraphStyle}>Starting a Pte Lte company</Paragraph>
        </Card>
        </Col>
    </Space>
    </Row>
    </div>
    </SiteContainer>
  );
}

export default Home;