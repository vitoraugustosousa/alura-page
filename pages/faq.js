import Head from "next/head";
import Link from "../src/components/Link";
import PageTitle from "../src/components/PageTitle";

// SSG - Static Site Generation
// SSR  - Server Side Redering
// ISG - Incremental Static Generation

// export async function getServerSideProps() {
//   // Roda a cada acesso recebido!
//   // Em modo DEV sempre roda! A cada acesso!
// }

export async function getStaticProps() {
  // Roda SOMENTE em build time
  // Em modo DEV sempre roda! A cada acesso!
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
  return {
    props: { test: "test props", faq }, // will be passed to the page component as props
  };
}

export default function FAQpage({ faq }) {
  return (
    <div>
      <PageTitle>FAQ - Alura Pages Campanha</PageTitle>
      <h1>Alura Cases - Pagina de perguntas</h1>
      <Link href="/">Ir para home</Link>
      <ul>
        {faq.map(({ question, answer }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
