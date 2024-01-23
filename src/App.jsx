import './App.css';

import LikeImageHOC from './components/HOC/LikeImageHOC'
import LikePostHOC from './components/HOC/LikePostHOC'

import LikeImageProps from './components/RenderProps/LikeImageProps'
import LikePostProps from './components/RenderProps/LikePostProps'
 
function App() {
  return (
    // <div>
    //   <h3>Some Blog</h3>
    //   <div className='buttons'>
    //     <LikePost/>
    //     <LikeImage/>
    //   </div>
    // </div>

    <>
      {/* Part I - HOC Logic */}
      <h1>Blog using HOC</h1>
      <div className="buttons">
        <LikeImageHOC/>
        <LikePostHOC/>
      </div>

      <h1>Blog using Render Props</h1>
      <div className="buttons">
        <LikeImageProps/>
        <LikePostProps/>
      </div>


    </>
  );
}

export default App;
