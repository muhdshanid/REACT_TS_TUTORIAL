
import './App.css'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'
import { Counter } from './components/class/Counter'
import Box from './components/context/Box'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { UserContextProvider } from './components/context/UserContext'
import { List } from './components/generics/List'
import { ButtonComponent } from './components/html/ButtonComponent'
import { Text } from './components/polymorphic/Text'
import RandomNumber from './components/restriction/RandomNumber'
// import Counter from './components/state/Counter'
import User from './components/state/User'
import { Toast } from './components/templateLiterals/Toast'
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
     {/* <UserContextProvider>
      <User/>
     </UserContextProvider> */}
     {/* <Counter message='some'/>
     <Private isLoggedIn={true} component={Profile}/> */}
     {/* <List  items={[{id:1,first:"some"}]} onClick={(item) => console.log(item) */}
     {/* }/> */}
     {/* <RandomNumber value={10} isPositive />
     <Toast position='center'/> */}
     {/* <ButtonComponent variant="primary" onClick={() => console.log("hi")}
     >
some
     </ButtonComponent> */}
     <Text htmlFor="some" as="label" size='lg'>Heading</Text>
     <Text htmlFor="someId" as="label" size='sm'>Label</Text>
     <Text as="p" size='md' color='primary'>Paragraph</Text>
    </>
  )
}

export default App
