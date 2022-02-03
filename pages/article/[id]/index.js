import { server } from '../../../config'
import Link from "next/link";
import Meta from '../../../components/Meta';
import { Button } from '@material-ui/core';
// import { useRouter } from "next/router";

const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Button href="/">Go Back</Button>
    </>
  );
};


// Data is getting fetched at build time and is passed through
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}

// this generates all the path to the articles
export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

// // Data is getting fetched at build time and is passed through
// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const article = await res.json()

//   return {
//     props: {
//       article
//     }
//   }
// }
// // this generates all the path to the articles
// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const articles = await res.json()
//   const ids = articles.map(artlcle => artlcle.id)
//   const paths = ids.map(id => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

// Everytime a page is visited data is getting fetched
// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const article = await res.json()

//   return {
//     props: {
//       article
//     }
//   }
// }

export default article;