import SideBar from './components/SideBar.js';
import Channelbar from './components/ChannelBar.js';
import ContentContainer from './components/ContentContainer.js';

const HomePage = () => (
	<div className="flex">
		<SideBar />
		<Channelbar />
		<ContentContainer />
	</div>
)

export default HomePage;
