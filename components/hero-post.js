import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
          slug={slug}
        />
 
      </div>

      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 ">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
               
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
          {tags.map((post) => (
            <span key={post.name} className={"text-xs rounded font-semibold inline-flex py-1 px-2 uppercase  text-"+(post.color)+"-600 last:mr-0 mr-1 bg-"+(post.color)+"-200"}>
            {post.name} 
          </span>      
          ))}
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  )
}
