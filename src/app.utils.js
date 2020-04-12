export default class AppUtils {
  
  static prepareStringToSearch(str) {
    const strLower = str.toLowerCase();
    const strSemEspacos = strLower.trim();

    return strSemEspacos.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}