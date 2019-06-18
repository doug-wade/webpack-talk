async function getComponent() {
  const $ = await import('jquery');

  return $('<div>').text('hello webpack');
}

(async () => {
  const component = await getComponent();

  document.body.appendChild(component);
})();
