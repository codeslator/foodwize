interface AuthUser {
  vendorId: string;
  email: string;
  firstName: string;
  lastName: string;
  metadata: object | string | string[];
  status: string;
  role: string;
  avatarUrl?: string;
  // accountType?: string;
  // deviceId?: number | string;
  // isSocialAuth?: boolean | null;
  // stripeStatus?: string;
}

export interface UserAuthenticated {
  refresh_token: string;
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
    refresh_token: '',
    refreshToken: '',
    user: null,
  },
  isAuthenticated: false,
  isLoading: false,
  error: '',
};
