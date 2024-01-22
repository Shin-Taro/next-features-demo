import { FC } from "react"
import { fetchPosts } from "../../modules"
import { PostList } from "../PostList"

/**
 * @public
 *
 * @description
 * [in Japanese]
 * App Router と Pages Routerが混在しているのでAsync*という名前になっている
 *
 * [in English]
 * Since App Router and Pages Router are mixed, the name is Async*.
 */
export const AsyncPostList: FC = async () => {
  const data = await fetchPosts()

  return <PostList posts={data} />
}
