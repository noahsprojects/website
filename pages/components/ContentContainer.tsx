import { BsPlusCircleFill } from 'react-icons/bs';
import TopNavigation from './TopNavigation';
// import { useState } from 'react';

export type ContentContainerProps = {
	title: string,
	posts: JSX.Element[],
}

const ContentContainer = ({ channel = { title:"hello", posts: [<Post
	name='Ada'
	timestamp='one week ago'
	text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
	amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
	adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
	ipsum dolor sit amet consectetur adipisicing elit.`}
/>] } }: { channel: ContentContainerProps }) => {
	return (
		<div className='content-container'>
			<TopNavigation title={channel.title}/>
			<div className='content-list'>
				{channel.posts}
			</div>
			<BottomBar />
		</div>
	);
};

const BottomBar = () => (
	<div className='bottom-bar'>
		<PlusIcon />
		<input type='text' placeholder='Enter message...' className='bottom-bar-input' />
	</div>
);

export const Post = ({ name, timestamp, text }: { name: string, timestamp: string, text: string}) => {

	const seed: number = Math.round(Math.random() * 100);
	return (
		<div className={'post'}>
			<div className='avatar-wrapper'>
				<img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
			</div>

			<div className='post-content'>
				<p className='post-owner'>
					{name}
					<small className='timestamp'>{timestamp}</small>
				</p>
				<p className='post-text'>{text}</p>
			</div>
		</div>
	);
};

const PlusIcon = () => (
	<BsPlusCircleFill
		size='22'
		className='mx-2 text-green-500 dark:shadow-lg dark:text-primary'
	/>
);

export default ContentContainer;
