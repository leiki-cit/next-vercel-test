import Head from "next/head"
import { useEffect, useState} from "react"
import NextLink from "../src/components/Link"

//usado para fazer sites estáticos. O conteúdo trabalhado nunca será alterado mesmo que o conteúdo da api mude,
//será necessário fazer outro build do site para esse conteúdo mudar
//SSG = static site generation
//Se a api sair do ar, o site continua em pé, pois os conteúdos são estáticos.
//getStaticProps é rodado apenas no build
export async function getStaticProps() {
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  const faq = await fetch(FAQ_API_URL)
    .then(response => response.json()) 
    .then((response) => { return response }) 
  
  return {
    props: {
      faq
    }
  }
}

//Se o conteúdo do FAQ precisa estar sincronizado com o da api, é melhor usar o getServerSideProps
//Ele roda a cada acesso recebido.
/*
export async function getServerSideProps() {
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  const faq = await fetch(FAQ_API_URL)
    .then(response => response.json()) 
    .then((response) => { return response }) 
  
  return {
    props: {
      faq
    }
  }
}
*/

const FAQPage = ({faq}) => {
  return (
    <div>
      <Head>
        <title>FAQ - Alura Cases Campanha</title>
      </Head>
      <h1>Alura Cases - FAQ</h1>
      <NextLink href="/">
        Ir para o Home
      </NextLink>
      <ul>
        {
          faq.map(({answer, question}) => (
            <li key={question}>
              <article>
                <h2>{question}</h2>
                <p>{answer}</p>
              </article>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default FAQPage