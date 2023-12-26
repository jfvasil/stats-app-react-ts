type SquareButtonProps = {
  onClick: () => Promise<void>
}

const SquareButton = ({onClick}: SquareButtonProps) => {
  return (
  <section> 
    <h3>Add to history?</h3>
  <div>
  <button onClick={onClick} className="btn btn-square btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="green">
  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
</svg>

</button>
</div>
</section>
  )
}

export default SquareButton