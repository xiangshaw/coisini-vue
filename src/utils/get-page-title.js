// 得到要显示的网页title
import defaultSettings from '@/settings'

const title = defaultSettings.title || 'coisini.cn后台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
