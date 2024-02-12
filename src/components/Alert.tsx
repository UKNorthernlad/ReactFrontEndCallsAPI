import { ReactNode } from "react"

// The ReactNode class allows us to define a "complex" string such as a block of HTML.
interface Props {
    children: ReactNode
}

const Alert = (props: Props) => {
  return (
    <div className="alert alert-danger" role="alert">
        {props.children}
    </div>
  )
}

export default Alert