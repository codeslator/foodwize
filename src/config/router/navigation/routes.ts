import { RouteParent } from '../../interfaces';
import {
  TestView,
  SignInView,
  SignUpView,
  RecoverPasswordView,
  Users,
  NotFoundView,
  RedirectToLoginView,
  SettingsView,
  SuppliersView,
  OrderDetailsView,
  EditUserView,
  StockView,
} from '../../../views';
import { OrdersList, SuppliersList, DeliveriesList } from '../../../components/suppliers';
import { WarehousesList, CanteensList } from '../../../components/stock';
import { AuthLayout, AppLayout } from '../../../containers/layouts';
import { ROUTES } from './index';

export const routes: RouteParent[] = [
  {
    path: ROUTES.ROOT,
    Layout: AuthLayout,
    children: [
      { path: ROUTES.LOGIN, Component: SignInView },
      { path: ROUTES.REGISTER, Component: SignUpView },
      { path: ROUTES.RECOVER_PASSWORD, Component: RecoverPasswordView },
      { path: ROUTES.ANY, Component: RedirectToLoginView },
    ],
  },
  {
    path: ROUTES.APP,
    Layout: AppLayout,
    children: [
      { path: ROUTES.HOME, Component: TestView },
      {
        path: ROUTES.STOCK,
        Component: StockView,
        children: [
          { path: ROUTES.ROOT, Component: OrderDetailsView },
          { path: ROUTES.WAREHOUSES, Component: WarehousesList },
          { path: ROUTES.CANTEENS, Component: CanteensList },
        ]
      },
      { path: ROUTES.PRODUCTS, Component: TestView },

      { path: ROUTES.ANALYTICS, Component: EditUserView },
      {
        path: ROUTES.SUPPLIERS,
        Component: SuppliersView,
        children: [
          { path: ROUTES.ROOT, Component: OrdersList },
          { path: ROUTES.ORDERS, Component: OrdersList },
          { path: ROUTES.SUPPLIERS, Component: SuppliersList },
          { path: ROUTES.DELIVERIES, Component: DeliveriesList },
          { path: ROUTES.ORDER_ID, Component: OrderDetailsView },
        ],
      },

      { path: ROUTES.USERS, Component: Users },
      { path: ROUTES.SETTINGS, Component: SettingsView },
      { path: ROUTES.ANY, Component: NotFoundView },
    ],
  },
];