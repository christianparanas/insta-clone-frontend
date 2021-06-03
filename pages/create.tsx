import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'

import postData from '../store/postdata'


export default function create() {
	const router = useRouter()

	const { images, updateImgState } = postData()


  const showPostData = () => {
  	console.log(images)
  }

  useEffect(() => {
  	if(images.length == 0) {
  		router.push('/')
  	}
  }, [])

  const returnee = () => {
  	router.push('/')
  }

  if(images.length == 0) return null

	return (
		<div className="create_container">
			<div onClick={returnee} className="back">Return</div>
			{images.map((val, key) => {
					return (
						<div key={key}>
							<img src={`${val}`} alt="" />
						</div>
					)
				})}
		</div>
	)
}