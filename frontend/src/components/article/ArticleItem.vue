<template>
    <div class="article-item">
     
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
                    <strong>Tipo: </strong>{{ article.type=='A' ?'Texto' :'Vídeo'}}
                </span>
                <span class="article-item-idiom">
                    <strong>Idioma: </strong>{{ article.idiom }}
                </span>
                
                <span class="article-item-author">
                    <strong>Autor: </strong>{{ article.author }}
                </span>
                <div>
                 <ul class="list-group-horizontal"> <strong>Legendas Disponíveis: </strong>
                 <b-list-group-item  v-for="subtitle in subtitles" :key="subtitle.idiom" >
                     {{ subtitle.idiom }}
                     <i class="fa fa-globe"></i>
                </b-list-group-item> 
                </ul> 
                 </div>

            </div>
    
    </div>
</template>

<script>
import { baseApiUrl } from "@/global";
import axios from "axios";

export default {
  name: "ArticleItem",
  props: ["article"],

  data: function() {
    return {
      subtitles: [],
    };
  },
  methods: {
    getSubtitles() {
      const url = `${baseApiUrl}/subtitles/${this.article.id}`;
      axios(url).then((res) => (this.subtitles = res.data));
      
    },
  },

  mounted() {
  
    this.getSubtitles();
  },
};
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

.list-group-horizontal .list-group-item {
    display: inline-block;
}
.list-group-horizontal .list-group-item {
    margin-left: 20px;
    border-top-right-radius:4px;
    border-bottom-left-radius:4px;
    border-right-width: 1px;

}

</style>
