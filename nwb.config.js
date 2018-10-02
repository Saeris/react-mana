module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'reactMana',
      externals: {
        react: 'React'
      }
    }
  }
}
