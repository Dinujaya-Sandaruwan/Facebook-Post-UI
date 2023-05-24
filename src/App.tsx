import MyImageGallery from './components/MyImageGallery';
import Post from './components/Post';
import RandomUser from './components/RandomUser';
import data from './data.json';

function App() {
    return (
        <div className="app">
            {/* <MyImageGallery /> */}
            <Post
                uname={data.uname}
                dp={data.dp}
                time={data.time}
                caption={data.caption}
            />
        </div>
    );
}

export default App;
