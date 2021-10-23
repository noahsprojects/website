import SideBar from './components/SideBar';
import Channelbar from './components/ChannelBar';
import { ChannelBarProps } from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';
import { ContentContainerProps, Post } from './components/ContentContainer';

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

const Content: ContentContainerProps = {
	title: 'about',
	posts: [<Post
		name='Ada'
		timestamp='one week ago'
		text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
		amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
		adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
		ipsum dolor sit amet consectetur adipisicing elit.`}
	/>,
	<Post name='Leon' timestamp='one week ago' text={`Lorem ipsum dolor. `} />,
	<Post name='Jill' timestamp='5 days ago' text={`Lorem.`} />, 
	<Post
		name='Ellie'
		timestamp='4 days ago'
		text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
	/>,
	<Post
		name='Chris'
		timestamp='4 days ago'
		text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
		amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
		adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
		ipsum dolor sit amet consectetur adipisicing elit.

		Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
		ipsum dolor sit amet consectetur adipisicing elit.`}
	/>,]
}

const AboutPage = () => (
	<div className="flex">
		<SideBar />
		<Channelbar dropdowns={Channels}/>
		<ContentContainer channel={Content}/>
	</div>
)

export default AboutPage;
