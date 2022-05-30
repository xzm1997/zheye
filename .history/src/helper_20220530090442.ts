import { ColumnProps } from './store'
export function generateFitUrl(column: ColumnProps, width: number, height?: number) {
  if (column.avatar) {
    column.avatar.fitUrl = column.avatar.url + `?x-oss-process=image/`
  } else {
    column.avatar = {
      fitUrl: require('./assets/column.jpg')
    }
  }
}

