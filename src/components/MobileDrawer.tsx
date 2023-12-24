

type MobileDrawerProps = {
  onSortChange: (sortBy :string) => void, 
  onFilterChange: (filterBy: string) => void
}

const MobileDrawer = ({onSortChange, onFilterChange}: MobileDrawerProps) => {


  return (
    <div className="drawer fixed">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Filter or Sort</label>
  </div> 
  <div className="drawer-side fixed top-20">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 w-56 rounded-box">
  <li>Sort by:</li>
  <li>
    <ul>
      <li><button onClick={() => onSortChange('most recent')}>Most Recent</button></li>
      <li><button onClick={() => onSortChange('oldest')}>Oldest</button></li>
      <li>
        Filter by Calculation: 
        <ul>
        <li><button onClick={() => onFilterChange('all')}>All</button></li>
          <li><button onClick={() => onFilterChange('median')}>Median</button></li>
          <li><button onClick={() => onFilterChange('mean')}>Mean</button></li>
          <li><button onClick={() => onFilterChange('mode')}>Mode</button></li>
          <li><button onClick={() => onFilterChange('range')}>Range</button></li>
        </ul>
      </li>
    </ul>
  </li>
  
</ul>  
  </div>
</div>
  )
}

export default MobileDrawer