export default timeout => new Promise((res) => {
  setTimeout(() => {
    res();
  }, timeout);
});
