<template>
  <div>
    <h3>Sungui：基于vue2.0开发的组件库</h3>
    <div class="lib-item">
      <h4>Loading</h4>
      <sg-loading />
    </div>

    <div class="lib-item" style="background: #333">
      <h4 style="color: #fff">Flybox</h4>
      <div style="width: 50%; height: 20vh">
        <sg-flybox line-color="red" duration="4" fly-color="yellow">
          <div style="padding: 20px">
            <P>1</P>
            <P>1</P>
            <P>1</P>
          </div>
        </sg-flybox>
      </div>
      <div style="width: 30%; margin-top: 20px">
        <sg-flybox line-color="red" duration="2" fly-color="yellow">
          <div style="padding: 20px"></div>
        </sg-flybox>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.lib-item {
  background: #fff;
  padding: 30px;
  margin: 20px 0;
  position: relative;
}
</style>