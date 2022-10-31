import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/home";
import Transactions from "./pages/transactions";
import TransactionDetails from "./pages/transaction-details";
import NotFound from "./pages/404";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/transactions",
    name: "transactions-route",
    component: Transactions,
  },
  {
    path: "/transactions/:id",
    component: TransactionDetails,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
