function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
function saveInput(){
  document.getElementById(
    "results"
  ).innerText = `Results for: "${query}"`;
}

const processChange = debounce(() => saveInput());