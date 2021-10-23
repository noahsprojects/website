import SideBar from './components/SideBar';
import ChannelBar from './components/ChannelBar';
import { ChannelBarProps } from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';

const Channels: ChannelBarProps[] = [
	{
		header: 'general',
		topics: ['general', 'random', 'test'],
	}
];

const HomePage = () => (
	<div className="flex">
		<SideBar />
		<ChannelBar dropdowns={Channels}/>
		<ContentContainer />
	</div>
)

export default HomePage;
