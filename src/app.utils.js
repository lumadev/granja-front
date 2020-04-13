import moment from 'moment';

export default class AppUtils {
  
  static formataData(date, format) {
    return moment(date).format(format);
  }

  static prepareStringToSearch(str) {
    const strLower = str.toLowerCase();
    const strSemEspacos = strLower.trim();

    return strSemEspacos.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}