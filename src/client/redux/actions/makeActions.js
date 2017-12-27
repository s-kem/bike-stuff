export const makeAction = constant => payload => ({ type: constant, payload })

export default constants => constants.map(makeAction)
