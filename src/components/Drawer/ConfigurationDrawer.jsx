import { Drawer, Button, Typography, Switch } from 'antd';

import styled from 'styled-components';
function ConfigurationDrawer({
  placement,
  visible,
  onClose,
  handleSidenavColor,
  handleSidenavType,
  handleFixedNavbar,
  sidenavType,
  setSidenavType,
}) {
  const { Title, Text } = Typography;
  const ButtonContainer = styled.div`
    .ant-btn-primary {
      background-color: #1890ff;
    }
    .ant-btn-success {
      background-color: #52c41a;
    }
    .ant-btn-yellow {
      background-color: #fadb14;
    }
    .ant-btn-black {
      background-color: #262626;
      color: #fff;
      border: 0px;
      border-radius: 5px;
    }
    .ant-switch-active {
      background-color: #1890ff;
    }
  `;
  return (
    <>
      <Drawer
        className="settings-drawer"
        mask={true}
        width={360}
        onClose={onClose}
        placement={placement}
        open={visible}
      >
        <div>
          <div className="header-top">
            <Title level={4}>
              Configurator
              <Text className="subtitle">See our dashboard options.</Text>
            </Title>
          </div>

          <div className="sidebar-color">
            <Title level={5}>Sidebar Color</Title>
            <div className="theme-color mb-2">
              <ButtonContainer>
                <Button
                  type="primary"
                  onClick={() => handleSidenavColor('#1890ff')}
                >
                  1
                </Button>
                <Button
                  type="success"
                  onClick={() => handleSidenavColor('#52c41a')}
                >
                  1
                </Button>
                <Button
                  type="danger"
                  onClick={() => handleSidenavColor('#d9363e')}
                  className="bg-[#d9363e]"
                >
                  1
                </Button>
                <Button
                  type="yellow"
                  onClick={() => handleSidenavColor('#fadb14')}
                >
                  1
                </Button>

                <Button type="black" onClick={() => handleSidenavColor('#111')}>
                  1
                </Button>
              </ButtonContainer>
            </div>

            <div className="sidebarnav-color mb-2">
              <Title level={5}>Sidenav Type</Title>
              <Text>Choose between 2 different sidenav types.</Text>
              <ButtonContainer className="trans">
                <Button
                  type={sidenavType === 'transparent' ? 'primary' : 'white'}
                  onClick={() => {
                    handleSidenavType('transparent');
                    setSidenavType('transparent');
                  }}
                >
                  TRANSPARENT
                </Button>
                <Button
                  type={sidenavType === 'white' ? 'primary' : 'white'}
                  onClick={() => {
                    handleSidenavType('#fff');
                    setSidenavType('white');
                  }}
                >
                  WHITE
                </Button>
              </ButtonContainer>
            </div>
            <div className="fixed-nav mb-2">
              <Title level={5}>Navbar Fixed </Title>
              <Switch onChange={(e) => handleFixedNavbar(e)} />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default ConfigurationDrawer;
