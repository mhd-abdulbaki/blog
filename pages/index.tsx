import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard,PostWidget,Categories } from "../components"
import { getPosts } from "../services"
import { FeaturedPosts } from "../sections"



const Home: NextPage<any> = ({posts}) => {
  return (
    <div className="container mx-auto px-10 mb-8  ">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <FeaturedPosts/>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        {/* main side */}
        <div className='lg:col-span-8 col-span-1'>
        {
          posts.map((post:any,index:number)=> <PostCard post={post.node} key={index} />)
        }
        </div>

     
        {/* right side */}
      <div className='lg:col-span-4 col-span-1'>
        <div className='lg:sticky relative top-8 '>
          <PostWidget/>
          <Categories/>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Home

export async function getStaticProps(){
  const posts = (await getPosts()) || [] ;

  return {
    props:{
      posts
    }
  }
}
