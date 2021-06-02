import { useState } from 'react'
import { useForm } from "react-hook-form";
import FileBase from 'react-file-base64'



export default function create() {

	const [postImgData, setPostImgData] = useState([])
                                                                                                                             

	const handleSubmit = (event) => {
		console.log(postImgData)
		event.preventDefault();

	}

	const postDataSetter = (base64) => {
		console.log(base64)
		setPostImgData(base64)
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<FileBase 
					multiple={true}
					onDone={(base64) => postDataSetter(base64)}
				/>
				<input type="submit" name="" id="" />
			</form>

				{postImgData.map((val, key) => {
					return (
						<div key={key}>
							<img src={`${val.base64}`} alt="" />
						</div>
					)
				})}

		</>
	)
}


// {postData && (
// 	<video src={`${postData.img}`} type="video/mp4" width="320" height="240" controls>
// 		hello
// 	</video>
// )}