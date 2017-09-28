<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-date"></i></el-breadcrumb-item>
        <el-breadcrumb-item>vue 编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="plugins-tips">
      Vue-Quill-Editor: 基于 Quill,适用于 Vue2的富文本编辑器
    </div>
    <quill-editor ref="myTextEditor"
                  v-model="content"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)"
                  @change="onEditorChange($event)">
    </quill-editor>
    <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor';
  export default {
    data: function () {
      return {
        content: '<h2>I am Example</h2>',
        editorOption: {

        }
      }
    },
    components: {
      quillEditor
    },
    methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
      },
      submit: function () {
        this.$message.success('提交成功!')
      }
    },
    computed: {
      editor: function () {
        return this.$refs.myTextEditor.quillEditor
      }
    }
  }
</script>

<style>
  .editor-btn{
    margin-top: 20px;
  }
</style>
