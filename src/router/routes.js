const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      { path: "/books", component: () => import("pages/BooksPage.vue") },
      { path: "/profile", component: () => import("pages/ProfilePage.vue") },
      { path: "/auth", component: () => import("pages/AuthPage.vue") },
      { path: "/settings", component: () => import("pages/SettingsPage.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
