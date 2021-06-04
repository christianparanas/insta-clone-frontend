import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'

import postData from '../store/postdata'


export default function create() {
	const router = useRouter()

	const { images, updateImgState } = postData()
        const [postDatas, setPostDatas] = useState([])

  const returnee = () => {
  	router.push('/')
  }

  useEffect(() => {
    setPostDatas(images)
  }, [])

	return (
		<div className="create_container">
			<div onClick={returnee} className="back">Return</div>
			{postDatas.map((val, key) => {
					return (
						<div key={key}>
							<img src={`${val}`} alt="" />
						</div>
					)
				})}
		</div>
	)
}
