<template>
    <div class="language-admin">
        <b-form> 
            <input id="language-id" type="hidden" v-model="language.id"/>
            <b-row>
                <b-col md="4" sm="12">
                    <b-form-group label="Idioma:" label-for="language-idioma">
                        <b-form-input id="language.idioma" type="text"
                        v-model="language.idioma" required
                        placeholder="Informe o Idioma..." />
                    </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="Local:" label-for="language-country">
                        <b-form-input id="language.country" type="text"
                        v-model="language.country" required
                        placeholder="Informe o País do Idioma.." />
                    </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="Código Idioma:" label-for="language-acronym">
                        <b-form-input id="language.acronym" type="text"
                        v-model="language.acronym" required
                        placeholder="Informe o Código do Idioma.." />
                    </b-form-group>
                </b-col>
                <b-col xs="12">
                    <b-button variant="primary" v-if="mode === 'save'"
                        @click="save">Salvar</b-button>
                    <b-button variant="danger" v-if="mode === 'remove'"
                        @click="remove">Excluir</b-button>
                    <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>
        <hr>
        <b-table hover striped :items="languages" :fields='fields'></b-table>
    </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "LanguageAdmin",
  data: function() {
    return {
      mode: "save",
      language: {},
      languages: [],
      fields: [
        { key: "id", label: "Id", sortable: true },
        { key: "idiom", label: "Idioma", sortable: true },
        { key: "country", label: "País", sortable: true },
        { key: "acronym", label: "Código Idioma", sortable: true },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadLanguages() {
      const url = `${baseApiUrl}/languages`;
      axios.get(url).then((res) => {
        this.languages = res.data;
      })
    },
    reset () {
        this.mode = 'save'
        this.language = {}
        this.loadLanguages()
    },
        save() {
            const method = this.language.id ? 'put' : 'post'
            const id = this.language.id ? `/${this.language.id}` : ''
            axios[method](`${baseApiUrl}/languages${id}`, this.language)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
    }},
        remove() {
            const id = this.language.id
            axios.delete(`${baseApiUrl}/languages/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
  },
  mounted() {
    this.loadLanguages();
  },
}
</script>
