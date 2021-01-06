import NzapHead from './_components/_head'
import NzapFooter from './_components/_footer'
import NzapFilter from './_components/_filter';
import NzapTable from './_components/_table';
import NzapHeader from './_components/_header';
import { useEffect } from 'react';
// const rawData = require('../data/nzap-sample.json');



export default function Home(props) {
  useEffect(() => {

  }, [])
  return (
    <div>
      <NzapHead />
      <NzapHeader />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <NzapFilter mutableCategories={props.mutableCategories} rawData={props.filterData} />
          </div>
          <div className="col-12">
            {/* <NzapTable data={rawData} /> */}
          </div>
        </div>
      </div>
      <NzapFooter />
    </div>
  )
}


export const getServerSideProps = async (ctx) => {
  const filterData = require('../data/filter-data.json');
  let mutableCategories = [...filterData.categories]
  return { props: { mutableCategories, filterData } }
}




