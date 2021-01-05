import { localstorageService } from '../services';

const LOCALE = 'locale';

const setLocale = (locale) => { localstorageService.setItem(LOCALE, locale); };
const getLocale = () => localstorageService.getItem(LOCALE);

export default {
  setLocale,
  getLocale,
};
