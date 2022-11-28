import orderBy from 'lodash.orderby'
import shuffle from 'lodash.shuffle'

import { convertStringToBuffer } from '../commands-utils/convertStringToBuffer'
import { slice } from './zrange-command.common'

export function zrandmember(key, count, withScores) {
  const map = this.data.get(key)
  if (!map) {
    return []
  }

  // @TODO investigate a more stable way to detect sorted lists
  if (this.data.has(key) && !(this.data.get(key) instanceof Map)) {
    return []
  }

  
  const result = shuffle(Array.from(map.values())).slice(0, count);

  if (
    typeof withScores === 'string' &&
    withScores.toUpperCase() === 'WITHSCORES'
  ) {
    return result.flatMap(it => [it.value, `${it.score}`])
  }

  return result.map(it => it.value)
}

export function zrandmemberBuffer(...args) {
  const val = zrandmember.apply(this, args)
  return convertStringToBuffer(val)
}
