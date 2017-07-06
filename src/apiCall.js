export default function fetchGiphy() {
  let stuff;
  fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
  .then(data => {
    if (data.ok) stuff = data.toJSON();
    else return '404 error';
  }).catch(err => {
    return err;
  })
  return stuff;
}