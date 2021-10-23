import SideBar from './components/SideBar';
import Channelbar from './components/ChannelBar';
import { ChannelBarProps } from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';

const Channels: ChannelBarProps[] = [
	{
		header: 'test',
		topics: ['general', 'random', 'test'],
  },
  {
    header: 'test2',
    topics: ['general', 'random', 'test'],
  },
];

const AboutPage = () => (
	<div className="flex">
		<SideBar />
		<Channelbar dropdowns={Channels}/>
		<ContentContainer />
	</div>
)

export default AboutPage;
