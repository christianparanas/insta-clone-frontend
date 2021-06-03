import { useState } from 'react'
import { useForm } from "react-hook-form";
import postData from '../store/postdata'

export default function create() {

	const [postImgData, setPostImgData] = useState([])
	const { images, updateImgState } = postData()

	const getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL: string = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result as string;
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

  const getData = () => {
  	updateImgState(postImgData)
  	console.log(images)
  }

	return (
		<>
			<form>
				<input type="file" multiple accept="image/*" name="file" onChange={handleFileInputChange} />
				<div onClick={getData}>click</div>
			</form>

			{images.map((val, key) => {
					return (
						<div key={key}>
							<img src={`${val}`} alt="" />
						</div>
					)
				})}

		</>
	)
}