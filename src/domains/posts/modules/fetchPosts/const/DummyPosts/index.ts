import { Post, Posts } from "@/domains/posts/types"

const generatePost = (id: string): Post => ({
  id,
  title: `Title ${id}`,
  body: `Body ${id}`,
  userName: `User ${id}`,
  createdAt: `2021-01-${id}`,
})

const idList = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]

export const DummyPosts: Posts = idList.map((id) => generatePost(id))
