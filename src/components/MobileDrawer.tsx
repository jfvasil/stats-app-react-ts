

const MobileDrawer = () => {
  return (
    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 w-56 rounded-box">
  <li><a>Item 1</a></li>
  <li>
    <a>Parent</a>
    <ul>
      <li><a>level 2 item 1</a></li>
      <li><a>level 2 item 2</a></li>
      <li>
        <a>Parent</a>
        <ul>
          <li><a>level 3 item 1</a></li>
          <li><a>level 3 item 2</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a>Item 3</a></li>
</ul>  </div>
</div>
  )
}

export default MobileDrawer