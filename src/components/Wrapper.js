import { Footer } from "./Footer"
import { Header } from "./Header"


export const Wrapper = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}
