import { useState } from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
import ArticleList from "./component/ArticleList";
import Content from "./component/Content";

function App() {
    const [article, setArticle] = useState({ number: "", title: "", author: "", date: "", content: "" });
    return (
        <Provider store={store}>
            <h2>Board App 📋 with RTK</h2>
            <div className="App">
                <ArticleList article={article} setArticle={setArticle} />
                <Content article={article} setArticle={setArticle} />
            </div>
        </Provider>
    );
}

export default App;
