import { Name } from "./Person.types"

type PersonListProps = {
    names: Name[]
}
const PersonList = ({names}: PersonListProps) => {
  return (
    <div>
        {
            names.map(name => (
                <div key={name.first}>
                <h2> {name.first}</h2>
                <h2> {name.last}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default PersonList