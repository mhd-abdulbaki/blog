import { NextPage } from 'next'
import React from 'react'

import { getPostDetails, getPosts } from "../../services" 

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsFrom } from "../../components"


const PostDetails:NextPage<any> = ({post}) => {

  console.log(post);

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsFrom slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            <PostWidget 
              slug={post.slug} 
              categories={post.categories.map((category :any)=>category.slug)} 
            />
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({params}:any) {
  const data = await getPostDetails(params.slug)

  return {
    props:{ post:data }
  }
}

export async function getStaticPaths(){
  const posts = await getPosts()
  return {
    paths:posts.map(({node:{slug}})=>({params:{slug}})),
    fallback:false,
  }
}