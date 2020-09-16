<template>
    <div class="article-item">
        <router-link :to="{ name: 'articleById', params: { id: article.id } }">
            <div class="article-item-image d-none d-sm-block">
                <img v-if="article.imageUrl"
                    :src="article.imageUrl"
                    height="150" width="150" alt="Article">
                <img v-else
                    src="@/assets/article.png"
                    height="150" width="150" alt="Article">
            </div>
            <div class="article-item-info">
                <h2>{{ article.name }}</h2>
                <p>{{ article.description }}</p>
                <span class="article-item-type">
                    <strong>Tipo: </strong>{{ article.type }}
                </span>
                <span class="article-item-idiom">
                    <strong>Idioma: </strong>{{ article.idiom }}
                </span>
                
                <span class="article-item-author">
                    <strong>Autor: </strong>{{ article.author }}
                </span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
  name: "ArticleItem",
  props: ["article"],

data: function() {
        return {
            subtitles: [],
        }
    },
  methods: {
        getArticle() {
            const url = `${baseApiUrl}/article/${this.article.id}`
            axios(url).then(res => this.article = res.data)
        },
        getSubtitle() {
            const url = `${baseApiUrl}/article/${this.article.id}/subtitles`
            axios(url).then(res => this.subtitles = res.data)        
        }
    },
    watch: {
        $route(to) {
            this.article.id = to.params.id
            this.subtitles = []
            this.getArticles()
            this.getSubtitle()
        }
    },
    mounted() {
        this.article.id = this.$route.params.id
        this.getArticles()
        this.getSubtitle()
    }
}
</script>

<style>
.article-item {
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}

.article-item a {
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  color: #000;
}

.article-item-info h2 {
  font-size: 1.7rem;
}

.article-item-image {
  padding-right: 20px;
  margin-right: 20px;
  border-right: 1px solid #aaa;
}

.article-item-image img {
  border-radius: 5px;
}

.article-item-info {
  display: flex;
  align-self: stretch;
  flex-direction: column;
}

.article-item-info p {
  flex: 1;
  color: #555;
  font-size: 1.1rem;
}
</style>
