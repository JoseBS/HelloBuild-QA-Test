import { useState } from 'react'
import { Formik, Form, Field } from 'formik'

import './App.css'

import Article from './components/Article/Article'

const App = () => {
  const [data, setData] = useState({ loadTime: 0, photos: [] })
  const handleSubmit = async values => {
    const startTime = new Date()
    const res = await fetch(`https://api.unsplash.com/search/photos?per_page=10&query=${values.search}`, {
      headers: {
        Authorization: 'Client-ID bm8Ew4tcVfCLMzpfQwbDon8NtBEmB6ok2SDx9ebOjMs'
      }
    })
    const data = await res.json()
    const endTime = new Date()
    const finalTime = endTime - startTime
    setData({ loadTime: finalTime, photos: data.results })
  }
  return (
    <div className='app'>
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field name='search' placeholder='Find...' />
          </Form>
        </Formik>
        <div>
          {`Load time: ${data.loadTime}ms`}
          <span> - </span>
          {`Result count: ${data.photos.length} items`}
        </div>
      </header>
      <div className='container' style={{ height: data.photos.length === 0 && '100%' }}>
        {data?.photos?.length > 0 &&
          <div className='center' role='list'>
            {data.photos.map?.(photo =>
              <Article photo={photo} key={photo.id} />
            )}
          </div>}
        {(data?.photos?.length === 0 && data.loadTime !== 0) && <div className='noResults'>No results found</div>}
      </div>
    </div>
  )
}

export default App
