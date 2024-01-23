import CommonHOC from './CommonHOC'

const LikeImageHOC = ({likeHandle,likeCount}) => {

  return(
    <>
      <button onClick={likeHandle}>Like Image {likeCount}</button>
    </>
  )

}

export default CommonHOC(LikeImageHOC)