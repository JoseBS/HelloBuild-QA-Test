import './Article.css'
const open = (url) => {
  window.open(url)
}
const Article = ({ photo }) => {
  return (
    <article role='listitem' onClick={() => open(photo.links.html)}>
      <img src={photo.urls.regular} alt={photo.alt_description} />
      <p>
        {[photo.description, photo.alt_description].join(' - ')}
      </p>
    </article>
  )
}

export default Article
