const isMobile = document.body.clientWidth < 768
window.L2Dwidget.on('*', name => {
  console.log('%c EVENT ' + '%c -> ' + name, 'background: #222; color: yellow', 'background: #fff; color: #000')
}).init({
  dialog: {
    enable: true,
    script: {
      'tap body': '哎呀！别碰我！',
      'tap face': '人家是在认真记录生活哦！',
    },
  },
  display: isMobile
    ? {
        position: 'right',
        width: 140,
        height: 280,
        hOffset: 0,
        vOffset: 0,
      }
    : {
        position: 'right',
        width: 200,
        height: 400,
        hOffset: 0,
        vOffset: 0,
      },
  model: { jsonPath: '/live2d-widget/model-haru01/assets/haru01.model.json' },
  mobile: { show: true, scale: 1 },
})
