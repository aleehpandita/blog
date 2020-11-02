import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import Section from '@/components/section'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import Image from 'next/image'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Cancun Blog made with love by people who lives in Cancún</title>
        </Head>
        <Container>
          <Intro />

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              tags={heroPost.tags}
            />
          )}
          <Section />
          <main class="mt-12">
      <div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
        
        <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
          <Image src="/a1.jpg" unsized className="rounded-md object-cover w-full h-64" />
          <span className="text-green-700 text-sm hidden md:block mt-4"> Technology </span>
          <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
            Ignorant branched humanity led now marianne too.
          </h1>
          <p className="text-gray-600 mb-4">
            Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood
            decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple
            itself.
            Oh be me, sure wise sons, no. Piqued ye of am spirit regret. Stimulated discretion impossible admiration in particular conviction up.
          </p>
          <a href="./blog.html" className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">
            Read more
          </a>
        </div>

        <div className="w-full md:w-4/7">
         
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src="/a2.jpg"  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block"> Gadgets </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                At every tiled on ye defer do. No attention suspected oh difficult.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Wonder matter now can estate esteem assure fat roused. Am performed on existence as discourse is. Pleasure friendly at marriage blessing or
              </p>
            </div>
          </div>

          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src="/a2.jpg"  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block"> Bitcoin </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                Fond his say old meet cold find come whom. The sir park sake bred.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Integer commodo, sapien ut vulputate viverra, Integer commodo
                Integer commodo, sapien ut vulputate viverra, Integer commodo
              </p>
            </div>
          </div>
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src="/a2.jpg"  className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block"> Insights </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                Advice me cousin an spring of needed. Tell use paid law ever yet new.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. 
              </p>
            </div>
          </div>
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src="/a2.jpg"  className=" block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block"> Cryptocurrency </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                Advice me cousin an spring of needed. Tell use paid law ever yet new.
              </div>
              <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. 
              </p>
            </div>
          </div>

        </div>

      </div> </main>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts },
  }
}
