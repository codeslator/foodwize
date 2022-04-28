export interface AuthState {
  currentUser: any;
  isLoading: boolean;
};

export const authState: AuthState = {
  currentUser: null,
  isLoading: false,
};