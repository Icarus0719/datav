<template>
  <div class="editor-page">
    <h3>富文本编辑器</h3>
    <el-tabs v-model="activeName">
      <el-tab-pane label="quill-editor" name="first">
        <P>支持web和移动</P>
        <br />
        <QuillEditor v-model="form.quillEditorText" />
      </el-tab-pane>
      <el-tab-pane label="wangEditor" name="second">
        <P>支持web，不支持移动</P>
        <br />
        <WangEditor v-model="form.wangEditorText" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import QuillEditor from '@/components/quilleditor.vue'
import WangEditor from '@/components/wangeditor.vue'
export default {
  components: { QuillEditor, WangEditor },
  data() {
    return {
      activeName: 'first',
      form: {
        quillEditorText: '',
        wangEditorText: ''
      }
    }
  }
}
</script>
<style lang="less">
.editor-page {
  background: #fff;
}
</style>