import moment from 'moment'
import 'moment/locale/vi'

export const formatTime = (createdAt) => {
  return moment(createdAt).format('llll')
};