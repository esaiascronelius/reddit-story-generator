import { readFile, writeFile } from 'fs/promises'
import moment from 'moment'
import type Post from './types/Post.d'
import votesToString from './votesToString.js'

const generatePostDocument = async (post: Post, outputPath: string) => {
  let html = await readFile('./static/post.html', 'utf-8')

  html = html.replace('{USERNAME}', post.username)
  html = html.replace('{TITLE}', post.title)
  html = html.replace('{BODY}', post.body.replaceAll('\n', '</p><p class="body">'))
  html = html.replace('{VOTES}', votesToString(post.votes))
  html = html.replace('{POST_TIME}', moment(post.postTime).fromNow())
  html = html.replace('{SUBREDDIT}', post.subreddit)

  await writeFile(outputPath, html)
}

export default generatePostDocument
