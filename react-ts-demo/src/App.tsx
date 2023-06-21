
import './App.css'
import Box from './components/context/Box'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { UserContextProvider } from './components/context/UserContext'
import Counter from './components/state/Counter'
import User from './components/state/User'
// import Button from './components/Button'
// import Container from './components/Container'
// import Greet from './components/Greet'
// import Heading from './components/Heading'
// import Input from './components/Input'
// import Oscar from './components/Oscar'
// import Person from './components/Person'
// import PersonList from './components/PersonList'
// import Status from './components/Status'

function App() {

  // const personName = {
  //   first: "Muhammed",
  //   last: "Shanid"
  // }
  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Mayne"
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent"
  //   },
  //   {
  //     first: "Pricess",
  //     last: "Angel"
  //   },
  // ]
  return (
    <>
     {/* <Greet name={"shanid"} messageCount={10} isLoggedIn={false}/>
     <Person name={personName}/>
     <PersonList names={nameList}/> */}
     {/* <Status status={"error"}/>
     <Heading>Placeholder text</Heading>
     <Oscar>
      <Heading>Oscar goes to some</Heading>
     </Oscar>
     <Greet name='shanid' isLoggedIn={true}/>
     <Button handleClick={(e,id) => {
      console.log("button clicked",e,id);
     }}/>
     <Input value='' handleChange={(e) => console.log(e)}/> */}
     {/* <Container styles={{border: '1px solid black', padding: '1rem', }}/> */}
     {/* <Counter/> */}
     {/* <ThemeContextProvider>
      <Box/>
     </ThemeContextProvider> */}
     <UserContextProvider>
      <User/>
     </UserContextProvider>
    </>
  )
}

export default App
