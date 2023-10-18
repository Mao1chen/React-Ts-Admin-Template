import { message } from "antd";
class useToast {
  constructor() {
    message.config({
      top: 10,
      duration: 3,
      maxCount: 3,
      prefixCls: "project-message",
    });
  }
  clear() {
    message.destroy();
  }
  loading(content: string | null) {
    message.loading(content);
  }
  success(content: string) {
    message.success(content);
  }
  error(content: string) {
    message.error(content);
  }
  warning(content: string) {
    message.error(content);
  }
}
export default new useToast();
