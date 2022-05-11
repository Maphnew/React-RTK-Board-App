import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: "articleList",
    initialState: {
        articleList: [],
    },
    reducers: {
        setAricleList: (state, action) => {
            state.articleList = action.payload;
        },
        createArticle: (state, action) => {
            let newArticle = action.payload;
            if (state.articleList.length === 0) {
                newArticle.number = 1;
            } else {
                const numList = state.articleList.map((a) => parseInt(a.number));
                newArticle.number = Math.max(...numList) + 1;
            }
            const appendedList = [...state.articleList, newArticle];
            state.articleList = appendedList;
        },
        updateArticle: (state, action) => {
            const item = action.payload;
            const updatedArticleList = state.articleList.map((article) => {
                if (item.author === article.author && item.number === article.number) {
                    return item;
                }
                return article;
            });
            state.articleList = updatedArticleList;
        },
        deleteArticle: (state, action) => {
            const item = action.payload;
            const filteredArticleList = state.articleList.filter((article) => {
                return !(item.author === article.author && item.number === article.number);
            });
            state.articleList = filteredArticleList;
        },
    },
});

export const { setAricleList, createArticle, updateArticle, deleteArticle } = articleSlice.actions;

export default articleSlice.reducer;
