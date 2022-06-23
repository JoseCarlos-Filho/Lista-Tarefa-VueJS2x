const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/estilosToDoList/app.sass";
          @import "@/estilosToDoList/taskstate.sass";
        `
      }
    }
  }
})
