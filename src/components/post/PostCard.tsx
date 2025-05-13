import { formatDistanceToNow } from 'date-fns'
import { ja } from 'date-fns/locale'
import Link from 'next/link'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PostCardProps } from '@/types/post'

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
      <Link href={`/posts/${post.id}`} className="flex flex-col h-full">
        {post.topImage && (
          <div className="w-full">
            <Image
              src={post.topImage}
              alt={post.title}
              width={600}
              height={100} // ✅ 高さ明示、これで画像が確実に小さく
              className="max-w w-auto h-[100px] object-cover rounded-t-lg"
            />
          </div>
        )}
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold line-clamp-2">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between flex-grow pt-0">
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {post.content}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
            <span>{post.author.name}</span>
            <time>
              {formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
                locale: ja,
              })}
            </time>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
