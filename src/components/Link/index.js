import Link from "next/link"

const NextLink = ({children, href, ...props}) => {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}

export default NextLink