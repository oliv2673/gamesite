import { Grid, Show } from '@chakra-ui/react'
import { GridItem } from '@chakra-ui/react'
import './App.css'
import { NavBar } from './components/NavBar'
import { GameGrid } from './components/GameGrid'


function App() {
  return (
    <>
<Grid
        templateAreas={{base: `"nav" "main"`, lg: `"nav nav" "aside main"`}}
          // `"nav nav"
          //         "aside main"`}
  // gridTemplateRows={'50px 1fr 30px'}
  // gridTemplateColumns={'150px 1fr'}
  // h='200px'
  // gap='1'
  // color='blackAlpha.700'
  // fontWeight='bold'
>
  <GridItem pl='2' bg='white.300' area={'nav'}>
    <NavBar />
  </GridItem>
  <Show above="lg">
    <GridItem pl='2' bg='white.300' area={'aside'}>
      Aside
    </GridItem>
  </Show>
  <GridItem pl='2' bg='white.300' area={'main'}>
    <GameGrid />
  </GridItem>
</Grid>
    </>
  )
}

export default App
