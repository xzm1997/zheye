import { ColumnProps, UserProps } from './store'

export function generateFitUrl (column: ColumnProps, width: number, height: number) {
  if (column.avatar) {
    column.avatar.fitUrl = column.avatar.url + `?x-oss-process=image/resize,m_pad,h_${height},w_${width}`
  } else {
    column.avatar = {
      fitUrl: require('./assets/column.jpg')
    }
  }
}

interface CheckCondition {
  format?: string[];
  size?: number;
}
type ErrorType = 'size' | 'format' | null

export function beforeUploadCheck (file: File, condition:CheckCondition) {
  const { format, size } = condition
  const isValidFormat = format ? format.includes(file.type) : true
  const isValidSize = size ? (file.size / 1024 / 1024 < size) : true
  let error: ErrorType = null
  if (!isValidFormat) {
    error = 'format'
  }
  if (!isValidSize) {
    error = 'size'
  }
  return {
    passed: isValidFormat && isValidSize,
    error
  }
}

export function addColumnAvatar (data: ColumnProps | UserProps, width: number, height: number) {
  if (data.avatar) {
    generateFitUrl(data.avatar, width, height)
  } else {
    const parseCol = data as ColumnProps
    data.avatar = {
      fitUrl: require(parseCol.title ? '@/assets/column.jpg' : '@/assets/avatar.jpg')
    }
  }
}
