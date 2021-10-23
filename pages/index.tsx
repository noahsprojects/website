import SideBar from './components/SideBar';
import Channelbar from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';

const HomePage = () => (
	<div className="flex">
		<SideBar />
		<Channelbar />
		<ContentContainer />
	</div>
)

export default HomePage;
