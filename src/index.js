import React from 'react';
import ReactDom from 'react-dom';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {articlesStore} from './store/initialData';
import {createStore} from 'redux';
import {articleReducer} from "./reducers/articleReducer";

import ArticlesList from './screens/ArticlesList';
import Article from './screens/Article';
import {findByID} from "./functions/halpers";

let store = createStore(articleReducer, articlesStore);
const App = () => (

	<BrowserRouter>
		<Switch>
			<Route exact path='/' render={() => <ArticlesList articles={store.getState().items} />}/>
			<Route path='/article/:id' render={({match}) => (<Article article={findByID(store.getState().items, match.params.id)}/>)}/>

		</Switch>
	</BrowserRouter>
);

ReactDom.render(<App />, document.getElementById('app'));



