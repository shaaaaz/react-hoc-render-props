import CommonProps from './CommonProps';

function LikePostProps() {
  return (
    <CommonProps>
      {
        ({ like, handleLike }) => {
          return <button onClick={handleLike}>Like Post {like}</button>;
        }
      }
    </CommonProps>
  );
}

export default LikePostProps;
