import { RouteParent } from '../../interfaces';
import {
  TestView,
  SignInView,
  SignUpView,
  RecoverPasswordView,
  UsersView,
  NotFoundView,
  RedirectToLoginView,
  SettingsView,
  SuppliersView,
  OrderDetailsView,
  EditUserView,
  StockView,
  DashboardView,
  AnalyticsView
} from '../../../views';
import { OrdersList, SuppliersList, DeliveriesList } from '../../../components/suppliers';
import { WarehousesList, CanteensList } from '../../../components/stock';
import { AllList, UsersList } from '../../../components/users';
import { AuthLayout, AppLayout } from '../../../containers/layouts';
import { ROUTES } from './index';
import { Permissions, Notifications, Security } from '../../../components/Settings';

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
      { path: ROUTES.HOME, Component: DashboardView },
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
      { path: ROUTES.ANALYTICS, Component: AnalyticsView },
      {
        path: ROUTES.SUPPLIERS,
        Component: SuppliersView,
        children: [
          { path: ROUTES.ROOT, Component: OrdersList },
          { path: ROUTES.ORDERS, Component: OrdersList },
          { path: ROUTES.SUPPLIERS, Component: SuppliersList },
          { path: ROUTES.DELIVERIES, Component: DeliveriesList },
          { path: `${ROUTES.ORDERS}/${ROUTES.ORDER_ID}`, Component: OrderDetailsView },
        ],
      },
      {
        path: ROUTES.USERS,
        Component: UsersView,
        children: [
          // { path: ROUTES.ROOT, Component: UsersView },
          { path: ROUTES.ALL, Component: AllList },
          { path: ROUTES.USERS, Component: UsersList },
          { path: ROUTES.FINANCES, Component: UsersList },
          { path: ROUTES.OPERATIONS, Component: UsersList },
          { path: ROUTES.ADMINS, Component: UsersList },
          { path: ROUTES.SUPER_ADMINS, Component: UsersList },
          { path: ROUTES.VENDOR_ID, Component: EditUserView },
          { path: ROUTES.TEST, Component: EditUserView },
        ]
      },
      {
        path: ROUTES.SETTINGS,
        Component: SettingsView,
        children: [
          { path: ROUTES.PERMISSIONS, Component: Permissions },
          { path: ROUTES.NOTIFICATIONS, Component: Notifications },
          { path: ROUTES.SECURITY, Component: Security },
        ]
      },
      { path: ROUTES.ANY, Component: NotFoundView },
    ],
  },
];