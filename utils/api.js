import { apiService } from '../services';

const authentication = {
  generate2FACode: (body) => apiService.post('twoFactorGenerate', body),
  verify2FAOTP: (body) => apiService.post('verifyUserTwoFA', body),
  verify2FASecretKey: (body) => apiService.post('verifySecrectKey', body),
};

const bitcoin = {
  getRate: (currency) => apiService.get(`rate/${currency}`),
};

const donation = {
  createTransaction: (body) => apiService.post('donation', body),
};

const user = {
  getWalletBalance: (body) => apiService.get('walletBalance', body),
  getListTransactions: (body) => apiService.get('transactions', body),
  convertBTCToCash: (body) => apiService.post('convertBtcToCash', body),
};

export default {
  authentication,
  user,
  bitcoin,
  donation,
};
