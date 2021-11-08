export default [
  {
    path: '/',
    component: () => import('@/views/index'),
    children: [
      { path: '', redirect: 'geely' },
      {
        path: 'zhengyin',
        component: () => import('@/views/zhengyin'),
      },
      {
        path: 'geely',
        component: () => import('@/views/geely'),
      },
    ],
  },
];
