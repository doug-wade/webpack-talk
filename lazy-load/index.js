(() =>
  import('./hello-sayer').then(module => {
    const helloSayer = module.default;
    helloSayer('Skillets');
  })
)()
