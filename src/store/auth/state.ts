interface AuthUser {
  accountId: string;
  accountType?: string;
  deviceId?: number | string;
  email: string;
  firstName: string;
  isSocialAuth?: boolean | null;
  lastName: string;
  metadata: object | string | string[];
  status: string;
  stripeStatus?: string;
};

export interface UserAuthenticated {
  token: string;
  refreshToken: string;
  user: AuthUser;
};

export interface AuthState {
  currentUser: UserAuthenticated;
  isLoading: boolean;
  isAuthenticated: boolean;
};

export const authState: AuthState = {
  currentUser: {
    token: '',
    refreshToken: '',
    user: {
      accountId: '',
      email: '',
      firstName: '',
      lastName: '',
      metadata: [],
      status: '',
    }
  },
  isAuthenticated: false,
  isLoading: false,
};