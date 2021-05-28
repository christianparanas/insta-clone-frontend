


export default function StoryBtn({ props }) {


	return (
		<>
			<div className="storyBtn__container">
				<div className="img_container">
					<img src={props.user_img} alt="" />
				</div>
				<p>{ props.user_name.length > 9 ? props.user_name.substring(0, 9) + '..' : props.user_name }</p>
			</div>
		</>
	)
}