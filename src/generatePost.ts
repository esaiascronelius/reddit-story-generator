import { generate } from './gpt.js'
import type Post from './types/Post.d'

const generatePost = async (subreddit = 'r/AskReddit'): Promise<Post> => {
  let context = `${subreddit}\nu/`
  const username = (await generate(context, undefined, '\n', 1.5, 5))?.split('\n')[0]
  context += username

  context += '\n\nTitle: '
  const title = (await generate(context, undefined, '\n', 1, 25))?.split('\n')[0]
  context += title

  context += '\n\nBody: '
  const body = await generate(context, undefined, '\n', 1, 10000)
  context += body

  return {
    username: `u/${username}`,
    title,
    body,
    context,
    subreddit,
    votes: Math.round(Math.random() * 100000),
    postTime: new Date().getTime() - Math.round(Math.random() * 10000000000)
  }
}

export default generatePost
