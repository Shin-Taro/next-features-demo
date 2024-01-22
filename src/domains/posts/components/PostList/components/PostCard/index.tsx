import { FC } from "react"
import { Post } from "../../../../types"

export const PostCard: FC<Post> = (props) => {
  const { title, userName, createdAt } = props

  return (
    <div>
      <h3>{title}</h3>
      <p>{userName}</p>
      <p>{createdAt}</p>
    </div>
  )
}
