import CommonHOC from './CommonHOC'

const LikeImageHOC = ({likeHandle,likeCount}) => {

  return(
    <>
      <button onClick={likeHandle}>Like Post {likeCount}</button>
    </>
  )

}

export default CommonHOC(LikeImageHOC)