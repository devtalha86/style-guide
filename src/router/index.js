import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Colors from "../views/Colors.vue";
import Widget from "../views/Widget.vue";
import Button from "../views/Button.vue";
import Notifications from "../views/Notifications.vue";
import Form from "../views/Form.vue";
import Typography from "../views/Typography.vue";
import Icons from "../views/Icons.vue";
import Docs from "../views/Docs.vue";
import Tickets from "../views/Tickets.vue";
import Tests from "../views/Tests.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/colors",
    name: "Colors",
    component: Colors
  },
  {
    path: "/widget",
    name: "Widget",
    component: Widget
  },
  {
    path: "/button",
    name: "Button",
    component: Button
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications
  },
  {
    path: "/form",
    name: "Form",
    component: Form
  },
  {
    path: "/typography",
    name: "Typography",
    component: Typography
  },
  {
    path: "/icons",
    name: "Icons",
    component: Icons
  },
  {
    path: "/icons",
    name: "Icons",
    component: Icons
  },
  {
    path: "/docs",
    name: "Docs",
    component: Docs
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: Tickets
  },
  {
    path: "/tests",
    name: "Tests",
    component: Tests
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
