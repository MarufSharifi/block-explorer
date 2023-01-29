import { Button } from "./button"



export const Header = () => {

    return (
        <div className="h-16 w-full shadow-md px-12 flex items-center justify-between">
            <h1 className="font-bold text-2xl">Block Explorer</h1>
            <div className="space-x-3">
                <Button >Blocks</Button>
                <Button >transactions</Button>
                <Button >About</Button>
            </div>
        </div>
    )
}