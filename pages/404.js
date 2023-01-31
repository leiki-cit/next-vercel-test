import NextLink from "../src/components/Link"

const Page404 = () => {
  return (
    <div>
      <h1>Você se perdeu e caiu em uma página que não existe :O</h1>
      <NextLink href={'/'}>
        Ir para a Home
      </NextLink>
    </div>
  )
}

export default Page404