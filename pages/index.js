import NzapHead from './_components/_head'
import NzapFooter from './_components/_footer'
import NzapLanding from './_components/v1/_landing'
import NzapHeader from './_components/v1/_header'


export default function Home(props) {
  return (
    <div>
      <NzapHead />
      <NzapHeader />
      <NzapLanding />
      <NzapFooter />
    </div>
  )
}

