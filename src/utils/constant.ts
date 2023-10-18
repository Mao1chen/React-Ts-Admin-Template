const VIEW_TITLE: String = ""; // 网页标题
const ROUTES_WHITE: Array<string> = []; // 路由白名单
const REG_REGULAR = {
  phoneReg: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/,
  codeReg: /^\d{6}$/,
};
export default { VIEW_TITLE, ROUTES_WHITE, REG_REGULAR };
