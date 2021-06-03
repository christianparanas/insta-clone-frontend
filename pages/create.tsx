import { useState } from 'react'
import { useForm } from "react-hook-form";


export default function create() {

	const [postImgData, setPostImgData] = useState([])

	const getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const handleFileInputChange = e => {
  	let files = Object.values(e.target.files)

  	files.map((val, key) => {
  		getBase64(val)
	      .then(result => {
	        setPostImgData(postImgData => [...postImgData, result])
	      })
	      .catch(err => {
	        console.log(err);
	      });
  	})
  };

	return (
		<>
			<form>
				<input type="file" multiple accept="image/*" name="file" onChange={handleFileInputChange} />
			</form>

			{postImgData.map((val, key) => {
					return (
						<div key={key}>
							<img src={`${val}`} alt="" />
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