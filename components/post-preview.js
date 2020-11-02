import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      
      </div>
      Tags:
        {tags.map((post) => (
            <span key={post.name} className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 last:mr-0 mr-1">
            {post.name} 
          </span>      
          ))}
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
