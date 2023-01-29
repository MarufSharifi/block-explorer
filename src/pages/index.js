import { useState } from "react";
import { Header, SearchInput } from "../components"
export * from './about';
export * from './block';
export * from './blocks';
export * from './transaction';
export * from './transactions';

export const Home = () => {
    const [searchValue, setSearchValue] = useState('');


    const _handleOnChangeValue = (e) => {
        setSearchValue(e.target.value);
    }

    const _handleSearchClicked = () => {
        console.log('search Value');
    }


    return (
        <div >
            <Header />
            <div className="w-full flex h-[calc(100vh-64px)] items-center justify-center overflow-y-auto">
                <div className="w-[500px] text-center">
                <h1 className="font-extrabold text-6xl mb-14">Block Explorer</h1>
                <p>Enter an Ethereum address below to look at transaction history 
                 in a human readable format.
                </p>
                <SearchInput value={searchValue} onChange={_handleOnChangeValue} onSearch={_handleSearchClicked}/>
                </div>
            </div>
        </div>
    )
}