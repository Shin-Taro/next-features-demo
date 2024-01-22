import { sleep } from "@/shared/utils/sleep"
import { Posts } from "../../types"
import { DummyPosts } from "./const"

export const fetchPosts = async (): Promise<Posts> => {
  await sleep(1000)
  return DummyPosts
}
