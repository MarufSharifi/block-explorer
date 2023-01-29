import { SearchIcon } from "../icons"

export const SearchInput = ({value, onChange, onSearch}) => {
    return (
        <div className="w-full h-10 flex rounded-md overflow-hidden mt-6">
           <input type='text' value={value} onChange={onChange} className="search w-[calc(100%-64px)] bg-gray-400 focus:outline-none px-3 text-white font-medium" placeholder="Enter wallet address here"/>
           <div onClick={onSearch} className="h-full w-16 bg-blue-600 flex justify-center items-center cursor-pointer">
            <SearchIcon fill="#fff" width={18}/>
           </div>
        </div>
    )
}