import { ProLayoutProps } from "@ant-design/pro-components";
interface IProLayoutProps extends ProLayoutProps {
  pwa?: Boolean;
  logo?: String;
}

const Settings: IProLayoutProps = {
  navTheme: "light",
  colorPrimary: "#1890ff",
  layout: "mix",
  contentWidth: "Fluid",
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: "project-name",
  pwa: true,
  logo: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  iconfontUrl: "",
  token: {},
};

export default Settings;
