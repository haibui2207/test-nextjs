// import { takeLatest, all, put, call, select, delay } from 'redux-saga/effects';
import { all } from 'redux-saga/effects';
// import moment from 'moment';

// import { apiUtil, cookieUtil } from '../../utils';
// import {
//   initializeAuth,
//   callSignIn,
//   callSignUp,
//   callSignOut,
//   callForgotPassword,
//   callUpdatePassword,
//   callTwoFactorVerifyOTP,
//   callTwoFactorGeneration,
//   callTwoFactorSetUpVerifyOTP,
//   callTwoFactorGetSecretKey,
//   callTwoFactorSaveSecretKey,
//   callTwoFactorVerifySecretKey,
//   callResendEmailVerification,
//   callSignUpResendEmailVerification,
//   callUpdateInformation,
//   setVerified2FAStatus,
//   setGGAuthenticator,
//   setBackupKey,
//   getAuth,
// } from '../ducks/auth.duck';
// import { rsf } from '../../services/firebase';
// import { setLoading } from '../ducks/loading.duck';
// import { notifyError, notifySuccess } from '../ducks/notification.duck';

// function* onInitializeAuthFlow() {
//   yield takeLatest(initializeAuth, function* onInitializeAuth() {
//     yield put(setLoading(true));
//     const status = cookieUtil.getVerified2FAStatus();
//     yield put(setVerified2FAStatus(Boolean(status)));
//     yield put(setLoading(false));
//   });
// }

// function* onSignInFlow() {
//   yield takeLatest(callSignIn, function* onSignIn({ payload: { formValues } }) {
//     try {
//       const { emailAddress, password } = formValues;
//       yield put(setLoading(true));
//       // TODO: keepMeIn
//       // yield call(
//       //   rsf.app.auth().setPersistence,
//       //   firebaseAuth.Auth.Persistence.SESSION,
//       // );
//       yield call(rsf.auth.signInWithEmailAndPassword, emailAddress, password);
//     } catch (error) {
//       yield put(
//         notifyError({ message: 'SIGN_IN.ERROR_MESSAGE.CANNOT_SIGN_IN' }),
//       );
//     } finally {
//       yield put(setLoading(false));
//     }
//   });
// }

// function* onSignUpFlow() {
//   yield takeLatest(callSignUp, function* onSignUp({
//     payload: { formValues, callback },
//   }) {
//     try {
//       yield put(setLoading(true));
//       const { companyName, emailAddress, password } = formValues;
//       const authUser = yield call(
//         rsf.auth.createUserWithEmailAndPassword,
//         emailAddress,
//         password,
//       );
//       yield call(rsf.auth.sendEmailVerification, {
//         url: `${window.location.origin}/sign-in`,
//       });
//       yield call(rsf.firestore.setDocument, `users/${authUser.user.uid}`, {
//         email: emailAddress,
//         image:
//           // eslint-disable-next-line max-len
// eslint-disable-next-line max-len
//           'https://firebasestorage.googleapis.com/v0/b/symple-f88d7.appspot.com/o/profileImages%2Flogo.png?alt=media&token=2827adb0-f908-4df7-8000-1a38e061c378',
//         createdAt: moment().unix(),
//         defaultCurrency: 'USD',
//         defaultBtcDenomination: 'BTC',
//         withdrawConfirmationThreshold: 0,
//         txFeeThreshold: 0,
//         loginSecretSaved: false,
//         reEnableTwoFA: false,
//         companyName,
//       });
//       callback(true);
//     } catch (error) {
//       callback(false);
//       yield put(
//         notifyError({ message: 'SIGN_UP.ERROR_MESSAGE.CANNOT_SIGN_UP' }),
//       );
//     } finally {
//       yield put(setLoading(false));
//     }
//   });
// }

// function* onSignUpResendEmailVerificationFlow() {
//   yield takeLatest(
//     callSignUpResendEmailVerification,
//     function* onSignUpResendEmailVerification({ payload: { callback } }) {
//       try {
//         yield call(rsf.auth.sendEmailVerification, {
//           url: `${window.location.origin}/sign-in`,
//         });
//         yield put(
//           notifySuccess({ message: 'SIGN_UP.SUCCESS_MESSAGE.RESEND_EMAIL' }),
//         );
//         callback(true);
//       } catch (error) {
//         callback(false);
//         yield put(
//           notifyError({ message: 'SIGN_UP.ERROR_MESSAGE.CANNOT_RESEND_EMAIL' }),
//         );
//       }
//     },
//   );
// }

// function* onResendEmailVerificationFlow() {
//   yield takeLatest(
//     callResendEmailVerification,
//     function* onResendEmailVerification({ payload: { callback } }) {
//       try {
//         yield put(setLoading(true));
//         yield call(rsf.auth.sendEmailVerification, {
//           url: `${window.location.origin}/sign-in`,
//         });
//         callback(true);
//       } catch (error) {
//         callback(false);
//         yield put(
//           notifyError({
//             message:
//               'RESEND_EMAIL_NOTIFICATION.ERROR_MESSAGE.CANNOT_RESEND_EMAIL',
//           }),
//         );
//       } finally {
//         yield put(setLoading(false));
//       }
//     },
//   );
// }

// function* onSignOutFlow() {
//   yield takeLatest(callSignOut, function* onSignOut() {
//     try {
//       yield put(setLoading(true));
//       yield call(rsf.auth.signOut);
//       yield put(setVerified2FAStatus(false));
//       cookieUtil.removeVerified2FAStatus();
//     } catch (error) {
//       yield put(notifyError({ message: error.message, raw: true }));
//     } finally {
//       yield put(setLoading(false));
//     }
//   });
// }

// function* onForgotPasswordFlow() {
//   yield takeLatest(callForgotPassword, function* onForgotPassword({
//     payload: { emailAddress, callback },
//   }) {
//     try {
//       yield put(setLoading(true));
//       yield call(rsf.auth.sendPasswordResetEmail, emailAddress, {
//         url: `${window.location.origin}/sign-in`,
//       });
//       callback(true);
//     } catch (error) {
//       callback(false);
//       yield put(
//         notifyError({
//           message: 'FORGOT_PASSWORD.ERROR_MESSAGE.CANNOT_SEND_EMAIL',
//         }),
//       );
//     } finally {
//       yield put(setLoading(false));
//     }
//   });
// }

// function* onUpdatePasswordFlow() {
//   yield takeLatest(callUpdatePassword, function* onUpdatePassword({
//     payload: { formValues, callback },
//   }) {
//     try {
//       yield put(setLoading(true));
//       console.log(formValues);
//       // TODO integration
//       yield delay(3000);
//       throw new Error();
//       // eslint-disable-next-line no-unreachable
//       yield put(
//         notifyError({
//           message: 'SETTINGS.PASSWORD.SUCCESS_MESSAGE.UPDATE_PASSWORD_SUCCESS',
//         }),
//       );
//       callback(true);
//     } catch (error) {
//       callback(false);
//       yield put(
//         notifyError({
//           message: 'SETTINGS.PASSWORD.ERROR_MESSAGE.CANNOT_UPDATE_PASSWORD',
//         }),
//       );
//     } finally {
//       yield put(setLoading(false));
//     }
//   });
// }

// function* onTwoFactorGetQRCodeFlow() {
//   yield takeLatest(callTwoFactorGeneration, function* onTwoFactorGetQRCode() {
//     try {
//       yield put(setLoading(true));
//       const auth = yield select(getAuth);
//       if (!auth || !auth.stsTokenManager || !auth.stsTokenManager.accessToken) {
//         throw new Error('Cannot get Authentication');
//       }
//       const response = yield call(apiUtil.authentication.generate2FACode, {
//         token: auth.stsTokenManager.accessToken,
//       });
//       if (!response.success) {
//         throw new Error(response.message);
//       }
//       yield put(
//         setGGAuthenticator({
//           qrCode: response.imageUrl,
//           secretCode: response.text,
//         }),
//       );
//     } catch (error) {
//       yield call(rsf.auth.signOut);
//       yield put(
//         notifyError({
//           message: 'TWO_FACTOR.SET_UP.ERROR_MESSAGE.CANNOT_GET_QRCODE',
//         }),
//       );
//     } finally {
//       yield put(setLoading(false));
//     }
//   });
// }

// function* onTwoFactorSetUpVerifyOTPFlow() {
//   yield takeLatest(
//     callTwoFactorSetUpVerifyOTP,
//     function* onTwoFactorSetupVerifyOTP({ payload: { otp, callback } }) {
//       try {
//         yield put(setLoading(true));
//         const auth = yield select(getAuth);
//         if (
//           !auth ||
//           !auth.uid ||
//           !auth.stsTokenManager ||
//           !auth.stsTokenManager.accessToken
//         ) {
//           throw new Error('Cannot get Authentication');
//         }
//         const response = yield call(apiUtil.authentication.verify2FAOTP, {
//           token: auth.stsTokenManager.accessToken,
//           otp,
//         });
//         if (!response.success) {
//           throw new Error(response.message);
//         }
//         yield put(setVerified2FAStatus(true));
//         cookieUtil.setVerified2FAStatus(true);
//         callback(true);
//       } catch (error) {
//         callback(false);
//         yield put(
//           notifyError({
//             message: 'TWO_FACTOR.SET_UP.ERROR_MESSAGE.CANNOT_VERIFY_OTP',
//           }),
//         );
//       } finally {
//         yield put(setLoading(false));
//       }
//     },
//   );
// }

// function* onTwoFactorGetSecretKeyFlow() {
//   yield takeLatest(
//     callTwoFactorGetSecretKey,
//     function* onTwoFactorGetSecretKey() {
//       try {
//         yield put(setLoading(true));
//         const auth = yield select(getAuth);
//         if (!auth || !auth.uid) {
//           throw new Error('Cannot get Authentication');
//         }
//         const snapshot = yield call(
//           rsf.firestore.getDocument,
//           `loginSecret/${auth.uid}`,
//         );
//         yield put(setBackupKey(snapshot.data().secret));
//       } catch (error) {
//         yield call(rsf.auth.signOut);
//         yield put(
//           notifyError({
//             message:
//               'TWO_FACTOR.SECRET_KEY.ERROR_MESSAGE.CANNOT_GET_SECRET_KEY',
//           }),
//         );
//       } finally {
//         yield put(setLoading(false));
//       }
//     },
//   );
// }

// function* onTwoFactorSaveSecretKeyFlow() {
//   yield takeLatest(
//     callTwoFactorSaveSecretKey,
//     function* onTwoFactorSaveSecretKey() {
//       try {
//         yield put(setLoading(true));
//         const auth = yield select(getAuth);
//         if (!auth || !auth.uid) {
//           throw new Error('Cannot get Authentication');
//         }
//         yield call(
//           rsf.firestore.setDocument,
//           `users/${auth.uid}`,
//           { loginSecretSaved: true, reEnableTwoFA: false },
//           { merge: true },
//         );
//         yield put(setVerified2FAStatus(true));
//         cookieUtil.setVerified2FAStatus(true);
//       } catch (error) {
//         yield put(
//           notifyError({
//             message: 'TWO_FACTOR.SET_UP.ERROR_MESSAGE.CANNOT_SAVE_BACKUP_KEY',
//           }),
//         );
//       } finally {
//         yield put(setLoading(false));
//       }
//     },
//   );
// }

// function* onTwoFactorVerifyOTPFlow() {
//   yield takeLatest(callTwoFactorVerifyOTP, function* onTwoFactorVerifyOTP({
//     payload: { otp },
//   }) {
//     try {
//       yield put(setLoading(true));
//       const auth = yield select(getAuth);
//       if (
//         !auth ||
//         !auth.uid ||
//         !auth.stsTokenManager ||
//         !auth.stsTokenManager.accessToken
//       ) {
//         throw new Error('Cannot get Authentication');
//       }
//       const response = yield call(apiUtil.authentication.verify2FAOTP, {
//         token: auth.stsTokenManager.accessToken,
//         otp,
//       });
//       if (!response.success) {
//         throw new Error(response.message);
//       }
//       yield put(setVerified2FAStatus(true));
//       cookieUtil.setVerified2FAStatus(true);
//     } catch (error) {
//       yield put(
//         notifyError({
//           message: 'TWO_FACTOR.VERIFY_OTP.ERROR_MESSAGE.CANNOT_VERIFY_OTP',
//         }),
//       );
//     } finally {
//       yield put(setLoading(false));
//     }
//   });
// }

// function* onTwoFactorVerifySecretKeyFlow() {
//   yield takeLatest(
//     callTwoFactorVerifySecretKey,
//     function* onTwoFactorVerifySecretKey({ payload: { secretKey, callback } }) {
//       try {
//         yield put(setLoading(true));
//         const auth = yield select(getAuth);
//         if (
//           !auth ||
//           !auth.uid ||
//           !auth.stsTokenManager ||
//           !auth.stsTokenManager.accessToken
//         ) {
//           throw new Error('Cannot get Authentication');
//         }
//         const response = yield call(apiUtil.authentication.verify2FASecretKey, {
//           token: auth.stsTokenManager.accessToken,
//           key: secretKey,
//         });
//         if (!response.success) {
//           throw new Error(response.message);
//         }
//         yield call(
//           rsf.firestore.setDocument,
//           `users/${auth.uid}`,
//           { loginSecretSaved: false, reEnableTwoFA: true },
//           { merge: true },
//         );
//         yield put(setVerified2FAStatus(false));
//         cookieUtil.setVerified2FAStatus(false);
//         callback(true);
//       } catch (error) {
//         callback(false);
//         yield put(
//           notifyError({
//             message:
//               'TWO_FACTOR.VERIFY_SECRET_KEY.ERROR_MESSAGE.CANNOT_VERIFY_OTP',
//           }),
//         );
//       } finally {
//         yield put(setLoading(false));
//       }
//     },
//   );
// }

// function* onUpdateInformationFlow() {
//   yield takeLatest(callUpdateInformation, function* onUpdateInformation({
//     payload: { formValues, callback = () => {} },
//   }) {
//     try {
//       yield put(setLoading(true));
//       const auth = yield select(getAuth);
//       if (!auth || !auth.uid) {
//         throw new Error('Cannot get Authentication');
//       }
//       yield call(
//         rsf.firestore.setDocument,
//         `users/${auth.uid}`,
//         { ...formValues },
//         { merge: true },
//       );
//       yield put(
//         notifySuccess({
//           message:
//             'SETTINGS.PERSONAL.SUCCESS_MESSAGE.UPDATE_INFORMATION_SUCCESS',
//         }),
//       );
//       callback(true);
//     } catch (error) {
//       callback(false);
//       yield put(
//         notifyError({
//           message: 'SETTINGS.PERSONAL.ERROR_MESSAGE.CANNOT_UPDATE_INFORMATION',
//         }),
//       );
//     } finally {
//       yield put(setLoading(false));
//     }
//   });
// }

export default function* saga() {
  yield all([
    // onInitializeAuthFlow(),
    // onSignInFlow(),
    // onSignUpFlow(),
    // onSignOutFlow(),
    // onForgotPasswordFlow(),
    // onUpdatePasswordFlow(),
    // onTwoFactorGetQRCodeFlow(),
    // onTwoFactorSetUpVerifyOTPFlow(),
    // onTwoFactorGetSecretKeyFlow(),
    // onTwoFactorSaveSecretKeyFlow(),
    // onTwoFactorVerifyOTPFlow(),
    // onTwoFactorVerifySecretKeyFlow(),
    // onResendEmailVerificationFlow(),
    // onSignUpResendEmailVerificationFlow(),
    // onUpdateInformationFlow(),
  ]);
}
