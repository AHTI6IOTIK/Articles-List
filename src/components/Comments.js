import React from 'react';



export const Comments = ({commentsState = false, comments}) => {

	let defaultStyle = {
		height: 0,
		overflow: 'hidden'
	};

	if (commentsState) {

		defaultStyle.height = 'auto';
	}

	return <div style={defaultStyle}>
		{
			comments.map((item) => {

				let {creatorName, text, date, id} = item;
				return <div key={id}>
					<p><b>Creator: {creatorName}</b>&nbsp;
						Date: {date}&nbsp;
					Text: {text}</p>
				</div>
			})
		}
	</div>
}