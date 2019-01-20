import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class ArticlesList extends Component{


	render() { {}

		return <div>{
			this.props.articles.map((item) => {

				let {title, previewText, id} = item;

				return <div key={id}>
					<p>Title: {title}</p>
					<p>Text: {previewText}</p>
					<p><Link to={'/article/'+id}>More</Link></p>
				</div>
			})
		}</div>
	}
}