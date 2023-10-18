/**
 * 这里需要与后端约定前端页面权限是怎么样的，再决定用以下哪个方法
 * @param initialState
 * @returns
 */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    adminblocker: (): Boolean => {
      return true;
    },
    routerblocker: (route: { name: String }): Boolean => {
      return true;
    },
  };
}
