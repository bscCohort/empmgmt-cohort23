import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'


function UpdateBookInfo(props) {
  const [book, setBook] = useState({
    title: '',
    isbn: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
  })

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios
    .get(`https://3000-bsccohort-empmgmtcohort-tgprlaafyqj.ws-us90.gitpod.io/api/books/${id}`)
    .then((res) => {
      setBook({
        title: res.data.title,
        isbn: res.data.isbn,
        author: res.data.author,
        description: res.data.description,
        published_date: res.data.published_date,
        publisher: res.data.publisher,
      })
    })
    .catch((err) => {
      console.log("Couldn't fetch the details of the book")
      console.log(err)
    })
  }, [id])

  const onChange = (e) => {
    setBook({
      ...book, [e.target.name]: [e.target.value]
    })
  }

  const onSubmit = (e) => {
    e.preventDeafault()

    const data = {
      title: book.title,
      isbn: book.isbn,
      author: book.author,
      description: book.description,
      published_date: book.published_date,
      publisher: book.publisher,
    };

    axios
    .put(`https://3000-bsccohort-empmgmtcohort-tgprlaafyqj.ws-us90.gitpod.io/api/books/${id}`, data)
    .then((res) => {
      navigate(`/show-book/${id}`)
    })
    .catch((err) => {
      console.log("Couldn't update the book")
    })

  }


  return (
    <div>
      
    </div>
  )
}

export default UpdateBookInfo








