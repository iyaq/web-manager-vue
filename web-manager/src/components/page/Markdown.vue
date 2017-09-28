<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-message"></i></el-breadcrumb-item>
        <el-breadcrumb-item>Markdown 编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="plugins-tips">
      <p>解析markdown语法。可以使用 <a href="https://github.com/miaolz123/vue-markdown" target="_blank">vue-markdown</a></p>
    </div>
    <markdown-editor
      ref="markdownEditor"
      v-model="content"
      :configs="configs"
    ></markdown-editor>
    <div class="preview">
      <el-button v-if="previewStatus" type="primary" @click="previewContent"> 编辑</el-button>
      <el-button v-else type="primary" @click="previewContent">预览</el-button>
    </div>
  </div>
</template>

<script>
  import { markdownEditor } from 'vue-simplemde'
  export default {
    data: function () {
      return {
        content: 'wirte here',
        configs: {
          spellChecker: true,
          status: true,
        },
        previewStatus: false
      }
    },
    components: {
      markdownEditor
    },
    mounted: function () {
      console.log(this.simplemde)

    },
    computed: {
      simplemde: function () {
        return this.$refs.markdownEditor.simplemde
      }
    },
    methods: {
      previewContent: function () {
        this.simplemde.togglePreview()
        this.previewStatus = !this.previewStatus
      }
    }
  }
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
  .preview {
    margin-top: 20px;
  }
</style>
