import { HeartIcon, HomeIcon, LibraryIcon, PlusCircleIcon, RssIcon, SearchIcon } from "@heroicons/react/outline"

const Sidebar = () =>
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
        <div className="space-y-4">
            <button className="flex items-center space-x-2 hover:text-white">
                <HomeIcon className="h-5 w-5"/>
                <div>Home</div>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <SearchIcon className="h-5 w-5"/>
                <div>Search</div>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <LibraryIcon className="h-5 w-5"/>
                <div>Your Library</div>
            </button>

            <hr className="border-t-[0.1px] border-gray-900"/>

            <button className="flex items-center space-x-2 hover:text-white">
                <PlusCircleIcon className="h-5 w-5"/>
                <div>Create Playlist</div>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <HeartIcon className="h-5 w-5"/>
                <div>Liked Songs</div>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <RssIcon className="h-5 w-5"/>
                <div>Your Episodes</div>
            </button>

            <hr className="border-t-[0.1px] border-gray-900"/>

            {/* Playlists */}
        </div>
    </div>

export default Sidebar