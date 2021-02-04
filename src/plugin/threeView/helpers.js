import {
  AxesHelper,
  GridHelper,
} from "three"

export const Default_helpers = (() => {
  let helpers = []
  helpers.push(new GridHelper(100, 20))
  helpers.push(new AxesHelper(100))
  return helpers
})()