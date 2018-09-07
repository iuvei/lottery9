import service from './service'
import {API_PAHT_MENUS} from '@/assets/consts/API_PATH'

export function getMenus () {
  return service.get(API_PAHT_MENUS)
}
