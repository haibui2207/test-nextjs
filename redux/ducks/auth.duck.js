/* eslint-disable max-len */
import { createAction, handleActions } from 'redux-actions';

const PREFIX = 'AUTH';
const initialStates = {
  ggAuthenticator: undefined,
  backupKey: undefined,
  verified2FA: false,
};

export const initializeAuth = createAction(`${PREFIX}/INITIALIZE`);

export const callSignIn = createAction(`${PREFIX}/SIGN_IN`);
export const callSignUp = createAction(`${PREFIX}/SIGN_UP`);
export const callSignUpResendEmailVerification = createAction(`${PREFIX}/SIGN_UP_RESEND_EMAIL_VERIFICATION`);
export const callSignOut = createAction(`${PREFIX}/SIGN_OUT`);
export const callResendEmailVerification = createAction(`${PREFIX}/RESEND_EMAIL_VERIFICATION`);
export const callForgotPassword = createAction(`${PREFIX}/FORGOT_PASSWORD`);
export const callUpdatePassword = createAction(`${PREFIX}/UPDATE_PASSWORD`);
export const callTwoFactorGeneration = createAction(`${PREFIX}/GENERATE_GG_AUTHENTICATION`);
export const callTwoFactorSetUpVerifyOTP = createAction(`${PREFIX}/TWO_FACTOR_SETUP_VERIFY_OTP`);
export const callTwoFactorGetSecretKey = createAction(`${PREFIX}/TWO_FACTOR_GET_SECRET_KEY`);
export const callTwoFactorSaveSecretKey = createAction(`${PREFIX}/TWO_FACTOR_SAVE_SECRET_KEY`);
export const callTwoFactorVerifyOTP = createAction(`${PREFIX}/TWO_FACTOR_VERIFY_OTP`);
export const callTwoFactorVerifySecretKey = createAction(`${PREFIX}/TWO_FACTOR_VERIFY_SECRET_KEY`);
export const callUpdateInformation = createAction(`${PREFIX}/UPDATE_INFORMATION`);

export const setGGAuthenticator = createAction(`${PREFIX}/SET_GG_AUTHENTICATOR`);
export const setBackupKey = createAction(`${PREFIX}/SET_BACKUP_KEY`);
export const setVerified2FAStatus = createAction(`${PREFIX}/SET_VERIFIED_2FA_STATUS`);

export const getAuth = (state) => state.firebase.auth;
export const getCurrentUserProfile = (state) => state.firebase.profile;
export const getGGAuthenticator = (state) => state.auth.ggAuthenticator;
export const getBackupKey = (state) => state.auth.backupKey;
export const getVerified2FAStatus = (state) => state.auth.verified2FA;

export default handleActions(
  new Map([
    [
      setGGAuthenticator,
      (state, { payload }) => ({ ...state, ggAuthenticator: payload }),
    ],
    [
      setVerified2FAStatus,
      (state, { payload }) => ({ ...state, verified2FA: payload }),
    ],
    [
      setBackupKey,
      (state, { payload }) => ({ ...state, backupKey: payload }),
    ],
  ]),
  { ...initialStates },
);
