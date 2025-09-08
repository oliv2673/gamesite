import { Grid, Show } from '@chakra-ui/react'
import { GridItem } from '@chakra-ui/react'
import './App.css'


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
  <GridItem pl='2' bg='orange.300' area={'nav'}>
    Nav
  </GridItem>
  <Show above="lg">
    <GridItem pl='2' bg='pink.300' area={'aside'}>
      Aside
    </GridItem>
  </Show>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
</Grid>
    </>
  )
}

export default App
