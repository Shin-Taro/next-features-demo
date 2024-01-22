import { FC } from "react"
import { Posts } from "../../types"
import { PostCard } from "./components"

type Props = {
  posts: Posts
}

/**
 * @public
 */
export const PostList: FC<Props> = (props) => {
  const { posts } = props

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  )
}
