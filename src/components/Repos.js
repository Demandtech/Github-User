import React from 'react'
import styled from 'styled-components'
import { GithubContext } from '../context/context'
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts'
const Repos = () => {
  const { repos } = React.useContext(GithubContext)
  
  let languages = repos.reduce((total, item)=> {
   const {language} = item
   if(!language) return total
   if(!total[language]) {
    total[language] = 1
   }else{
    total[language] = total[language] + 1
   }
   total[language] = 30
   return total
  })

  const data = [
    { label: 'Html', value: '12' },
    { label: 'css', value: '15' },
    { label: 'js', value: '13' },
    { label: 'react', value: '24' },
    
  ]
  return (
    <section className='section'>
      <Wrapper>
        {/* <ExampleChart  data={data}/> */}
        <Pie3D data={data}/>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

export default Repos
