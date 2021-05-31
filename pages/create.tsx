import { useState } from 'react'
import { useForm } from "react-hook-form";
import FileBase from 'react-file-base64'


export default function create() {

	const [postData, setPostData] = useState({
		img: '',
	})



	const handleSubmit = (event) => {
		console.log(postData)
		event.preventDefault();

	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<FileBase 
					type="file" 
					multiple={false} 
					onDone={({base64}) => setPostData({ ...postData, img: base64 })}
				/>
				<input type="submit" name="" id="" />
			</form>

			{postData && (
				<img src={`${postData.img}`} alt="" />
			)}
		</>
	)
}