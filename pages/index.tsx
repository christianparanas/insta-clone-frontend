import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios' 
import useSWR from 'swr'


// components
import Nav from '../components/home/Nav';
import Post from '../components/Post'
import StoryBtn from '../components/StoryBtn'



export default function Home() {
  const fileInput = useRef(null);

  // fetcher function
  const fetcher = url => axios.get(url).then(res => res.data)

  // api call
  const { data: post_arr, error: post_arr_Error } = useSWR('/api/post', fetcher)

  // media queries
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 451px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-device-width: 450px)'
  })

  // open add story file dialog on click
  const open_addStory_fileInput_dialog = () => {
    fileInput.current?.click();
    console.log(post_arr)
  }



  if (!post_arr) return <div>loading...</div>
  if (post_arr_Error) return <div>Error</div>

  return (
    <div className="container">
      <Head>
        <title>Insta Power Pop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isDesktopOrLaptop && <div className="desktop_under_construct">
        <p>Hi, currently this website is only available for mobile user with 450 pixels screen and below. Thank you.</p>
      </div>}

      {isMobile && <>
        <Nav />
        <div className="home_container">
  
          <div className="home_stories_container">
            <div onClick={open_addStory_fileInput_dialog} className="home_user_add_story">
              <div className="img_btn">
                <img src="/Default.png" alt="" />
                <svg aria-label="Plus icon" fill="#0095f6" height="16" viewBox="0 0 48 48" width="16"><path d="M24 0C10.8 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm12.3 25.5H25.5v10.7c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V25.5H11.8c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h10.7V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v10.7h10.7c.8 0 1.5.7 1.5 1.5s-.6 1.6-1.4 1.6z"></path></svg>
                <p>Your Story</p>
              </div>
              <form method="POST">
                <input ref={fileInput} accept="image/jpeg" type="file" />
              </form>
            </div>

          {post_arr.map((val, key) => {
            return (
              <div key={key}>
                <StoryBtn props={val} />
              </div>
            )
          })}}
          </div>

          {post_arr.map((value, key) => {
            return (
              <div key={key} className="">
                <Post props={value} />
              </div>
            )
          })}}
        </div>
      </>}
    </div>
  )
}
