import generatePost from './generatePost.js'
import generatePostDocument from './generatePostFile.js'

const post = await generatePost('r/AmItheAsshole')
await generatePostDocument(post, './tmp/post.html')
