import { BsPlus, BsFillLightningFill, BsGearFill, BsFillUnlockFill } from 'react-icons/bs';
import { BiHome } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { MdSchool, MdWorkOutline } from 'react-icons/md';
import { RiContactsBookFill } from 'react-icons/ri';

const SideBar = () => {
	return (
		<div className="fixed top-0 left-0 flex flex-col w-16 h-screen bg-white shadow-lg dark:bg-gray-900">
			<SideBarIcon icon={<BiHome size="28" />} text={"Home"}/>
			<Divider />
			<SideBarIcon icon={<BsPlus size="32" />} text={"About"}/>
			<SideBarIcon icon={<BsFillLightningFill size="20" />} text={"Experience"}/>
			<SideBarIcon icon={<MdSchool size="28" />} text={"Education"}/>
			<SideBarIcon icon={<MdWorkOutline size="24" />} text={"CV"}/>
			<SideBarIcon icon={<FaGithub size="28" />} text={"GitHub"} url={"https://github.com/Westlanderz"}/>
			<Divider />
			<SideBarIcon icon={<RiContactsBookFill size="28" />} text={"Contact"} url={"contact"} />
			<Divider />
			<SideBarIcon icon={<BsFillUnlockFill size="24" />} text={"Log-in"} url={"login"} />
			<SideBarIcon icon={<BsGearFill size="22" />} text={"Settings"} url={"test"} />
		</div>
	);
};

const SideBarIcon = ({ icon, text = 'tooltip 💡', url = ".." }) => (
	<div className="sidebar-icon group" onClick= {() => Redirect(url)}>
		{icon}

		<span class="sidebar-tooltip group-hover:scale-100">
			{text}
		</span>
	</div>
);

const Divider = () => <hr className="sidebar-hr" />;

function Redirect(url) {
	window.location.href = url;
}

export default SideBar;
