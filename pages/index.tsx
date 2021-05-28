import Head from 'next/head'
import { useState, useRef } from 'react'


// components
import Nav from '../components/home/Nav';
import Post from '../components/Post'

export default function Home() {
  const fileInput = useRef(null);

  const [post_arr, setPost_arr] = useState([
    {
      user_name: "Christian Paranas", 
      user_img: "/Default.jpg",
      post_imgs: [
        "/Default.jpg",
      ],
      post_likes: 120
    },
    {
      user_name: "Thea Taba", 
      user_img: "/Default.jpg",
      post_imgs: [
        "/Default.jpg",
        "/Default.jpg",
      ],
      post_likes: 550
    },
    {
      user_name: "kalel", 
      user_img: "/Default.jpg",
      post_imgs: [
        "/Default.jpg",
        "/Default.jpg",
      ],
      post_likes: 550
    },
    {
      user_name: "kristel", 
      user_img: "/Default.jpg",
      post_imgs: [
        "/Default.jpg",
        "/Default.jpg",
      ],
      post_likes: 550
    },
  ])


  // open add story file dialog on click
  const open_addStory_fileInput_dialog = () => {
    fileInput.current?.click();
  }

  return (
    <div className="container">
      <Head>
        <title>Insta Power Pop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="home_container">
        

        <div className="home_stories_container">
          <div onClick={open_addStory_fileInput_dialog} className="home_user_add_story">
            <div className="img_btn">
              <img src="/Default.jpg" alt="" />
              <svg aria-label="Plus icon" fill="#0095f6" height="16" viewBox="0 0 48 48" width="16"><path d="M24 0C10.8 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm12.3 25.5H25.5v10.7c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V25.5H11.8c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h10.7V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v10.7h10.7c.8 0 1.5.7 1.5 1.5s-.6 1.6-1.4 1.6z"></path></svg>
            </div>
            <p>Your Story</p>
            <form method="POST">
              <input ref={fileInput} accept="image/jpeg" type="file" />
            </form>
          </div>
        </div>

        {post_arr.map((value, key) => {
          return (
            <div key={key} className="">
              <Post props={value} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
