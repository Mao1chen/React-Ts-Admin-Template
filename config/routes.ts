interface IRouteType {
  path: String;
  layout?: Boolean;
  name?: String;
  redirect?: String;
  icon?: String;
  access?: String;
  component?: String;
  routes?: Array<IRouteType>;
}

const routes: Array<IRouteType> = [
  {
    path: "/user",
    layout: false,
    routes: [
      {
        name: "login",
        path: "/user/login",
        component: "./User/Login",
      },
    ],
  },
  {
    path: "/welcome",
    name: "welcome",
    icon: "smile",
    component: "./Welcome",
  },
  {
    path: "/admin",
    name: "admin",
    icon: "crown",
    access: "canAdmin",
    routes: [
      {
        path: "/admin",
        redirect: "/admin/sub-page",
      },
      {
        path: "/admin/sub-page",
        name: "sub-page",
        component: "./Admin",
      },
    ],
  },
  {
    name: "list.table-list",
    icon: "table",
    path: "/list",
    component: "./TableList",
  },
  {
    path: "/",
    redirect: "/welcome",
  },
  {
    path: "*",
    layout: false,
    component: "./404",
  },
];
export default routes;
