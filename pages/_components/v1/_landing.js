import NzapFilter from './_filter';
import NzapTable from './_table';

const NzapLanding = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <NzapFilter />
        </div>
        <div className="col-12">
          <NzapTable />
        </div>
      </div>
    </div>
  )
}

export default NzapLanding