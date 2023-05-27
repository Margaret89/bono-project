<template>
	<div class="app">
		<h1>Страница с постами</h1>

		<my-input
			v-model="searchQuery"
			placehoder="Поиск..."
		/>

		<div class="app__btns">
			<my-button
				@click="showDialog"
			>
				Создать пост
			</my-button>

			<my-select
				v-model="selectedSort"
				:options="sortOptions"
			/>
		</div>

		<!-- <input type="text" v-model.trim="modificatorValue"> -->

		<my-dialog v-model:show='dialogVisible'>
			<post-form @create = "creatPost"/>
		</my-dialog>

		<post-list
			:posts="sortedAndSearchedPosts" 
			@remove="removePost"
			v-if="!isPostLoading"
		/>

		<div v-else>Идет загрузка...</div>

		<div class="page__wrapper">
			<div
				v-for="page in totalPages"
				:key="page"
				class="page"
			>
				{{ page }}
			</div>
		</div>
	</div>
</template>

<script>
import PostFormTest from "@/components/PostFormTest.vue"
import PostList from "@/components/PostList.vue"
import axios from "axios"
import MyInput from './components/UI/_MyInput.vue'

export default {
	components: {
		PostFormTest, PostList,
MyInput
	},
	data() {
		return{
			posts: [],
			// posts: [
			// 	{id:1, title:'Javascript', body:'Описание поста'},
			// 	{id:2, title:'Javascript 2', body:'Описание поста 2'},
			// 	{id:3, title:'Javascript 3', body:'Описание поста 3'},
			// 	{id:4, title:'Javascript 4', body:'Описание поста 4'},
			// ],
			dialogVisible: false,
			modificatorValue: '',
			isPostLoading: false,
			selectedSort: '',
			searchQuery: '',
			page: 1,
			limit: 10,
			totalPages: 0,
			sortOptions: [
				{value: 'title', name: 'По названию'},
				{value: 'body', name: 'По содержимому'},
			]
		}
	},
	methods: {
		creatPost(post) {
			this.posts.push(post);
			this.dialogVisible = false
		},
		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id)
		},
		showDialog() {
			this.dialogVisible = true
		},
		async fetchPosts() {
			try {
				this.isPostLoading = true;
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
					params: {
						_page: this.page,
						_limit: this.limit,
					},
				});
				this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
				this.posts = response.data;
			} catch (e) {
				alert('Ошибка')
			} finally {
				this.isPostLoading = false;
			}
		}
	},
	mounted() {
		this.fetchPosts();
	},
	computed: {
		sortedPosts() {
			return [...this.posts].sort((post1, post2) => {return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])});
		},
		sortedAndSearchedPosts() {
			return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
		}
	},
}
</script>

<style>
/* <style scoped> scoped говорит, что стили применяются только внутри этого компонента */

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app{padding: 20px;}

.app__btns{
	display: flex;
	justify-content: space-between;
	margin: 20px 0;
}

.page__wrapper{
	display: flex;
	margin: 15px;
}

.page{
	border: 1px solid black;
	padding: 10px;
}
</style>
