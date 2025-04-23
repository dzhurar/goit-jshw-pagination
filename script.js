const gallery = document.getElementById('imageGallery');
const loadBtn = document.getElementById('loadMoreBtn');
let page = 1;
async function getImgs(pageNumber = 1){
  try {
    const imagesData = await fetch(`https://pixabay.com/api?key=49866368-09b26b9b0dd4ad79533ce9094&editors_choice=true&orientation=horizontal&page=${pageNumber}&per_page=10`)
    const { hits } = await imagesData.json();
    renderImgs(hits);
  } catch (error) {
    console.log(error)
  }
}

function renderImgs(images){
  const html = images
  .map((image) => {
    return `
    <img src="${image.largeImageURL}">
    `
  })
  gallery.innerHTML += html.join('');
}

loadBtn.addEventListener('click', () =>{
  page +=1;
  getImgs(page)
})
getImgs(page)