import { generate } from './gpt.js'

const generateComment = async (post: string) => {
  let msg = `${post}\n\nTop comment:\nu/`
  const username = (await generate(msg, undefined, ' ', 2, 5))?.split(' ')[0]
  msg += username

  msg += ':\n'
  const body = await generate(msg, undefined, '\n', 1.5, 10000, undefined, 1, 0.2)

  return { username, body }
}

export default generateComment
