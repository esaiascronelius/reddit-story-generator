import generateComment from './generateComment.js'
import generatePost from './generatePost.js'

const post = await generatePost()
const comment = await generateComment(post.context)

console.log(post)
console.log(comment)
