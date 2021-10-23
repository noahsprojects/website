import SideBar from '../components/SideBar';
import ChannelBar from '../components/ChannelBar';
import { ChannelBarProps } from '../components/ChannelBar';
import ContentContainer from '../components/ContentContainer';
import { ContentContainerProps, Post } from '../components/ContentContainer';

const Channels: ChannelBarProps[] = [
	{
		header: 'general',
		topics: ['general', 'random', 'test'],
	}
];

const Content: ContentContainerProps = {
	title: 'home',
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
	/>,
	<Post
		name='Claire'
		timestamp='2 days ago'
		text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
		amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
		adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
	/>,
	<Post
		name='Albert'
		timestamp='22 hours ago'
		text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ `}
	/>,
	<Post
		name='Rebecca'
		timestamp='3 hours ago'
		text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
		amet consectetur adipisicing elit.`}
	/>,
	<Post
		name='H.U.N.K'
		timestamp='Just now'
		text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
		amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
		adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
		ipsum dolor sit amet consectetur adipisicing elit.`}
	/>,
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
	/>,
	<Post
		name='Claire'
		timestamp='2 days ago'
		text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
		amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
		adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
	/>,]
}

const HomePage = () => (
	<div className="flex">
		<SideBar />
		<ChannelBar dropdowns={Channels}/>
		<ContentContainer channel={Content}/>
	</div>
)

export default HomePage;
