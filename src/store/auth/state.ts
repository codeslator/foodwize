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
}

export interface UserAuthenticated {
  token: string;
  refreshToken: string;
  user: AuthUser | null;
}

export interface UserNotAuthenticated {
  message: string;
}

export interface AuthState {
  currentUser: UserAuthenticated;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string;
}

export const authState: AuthState = {
  currentUser: {
    token: '',
    refreshToken: '',
    user: null
  },
  isAuthenticated: false,
  isLoading: false,
  error: '',
};