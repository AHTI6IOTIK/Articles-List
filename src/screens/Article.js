import React, {Component} from 'react';
import {Comments} from '../components/Comments';

export default class Article extends Component {

	state = {
		commentState: false
	};

	showComments = () => {

		this.setState(({commentState}) => ({commentState: !commentState}));
	};

	render() {

		let {text, title, comments} = this.props.article;
		let commentBtnTitle = 'Show comment';

		if (this.state.commentState) {

			commentBtnTitle = 'Hide comments';
		}

		return <div>
			<h2>{title}</h2>
			<p>{text}</p>
			<Comments commentsState={this.state.commentState} comments={comments} />
			<p onClick={this.showComments}>{commentBtnTitle}</p>
		</div>
	}
}