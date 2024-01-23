
import CommonProps from './CommonProps'

function LikeImageProps() {
  return (
    <CommonProps>
      {
        ({like,handleLike}) => {
          return <button onClick={handleLike}>Like Image {like}</button>
        }
      }
    </CommonProps>
  )
}

export default LikeImageProps
