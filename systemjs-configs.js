System.config({
  packages: {
    app: {
      format: 'cjs',
      defaultExtension: 'js'
    }
  }
});
System.import('app/boot')
  .then(null, console.error.bind(console));