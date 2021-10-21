import SideBar from './SideBar.js';
import Channelbar from './ChannelBar.js';
import ContentContainer from './ContentContainer.js';

const App = () => (
  <div className="flex">
    <SideBar />
    <Channelbar />
    <ContentContainer />
  </div>
)

export default App;
