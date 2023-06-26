import { generate } from './gpt.js'

const generatePost = async (subreddit = 'r/AskReddit') => {
  let context = `${subreddit}\nu/`
  const username = (await generate(context, undefined, '\n', 1.5, 5))?.split('\n')[0]
  context += username

  context += '\n\nTitle: '
  const title = (await generate(context, undefined, '\n', 1, 25))?.split('\n')[0]
  context += title

  context += '\n\nBody: '
  const body = await generate(context, undefined, '\n', 1, 10000)
  context += body

  return { username, title, body, context }
}

export default generatePost
