interface DetailsButtonProps {
    name: string; 
    link?: string; 
    onClick?: () => void; 
}


export default function DetailsButton({name, link, onClick}: DetailsButtonProps) {
    return (
        <>
            <a href={link}>
                <button onClick={onClick} className="self-end text-sm text-[#514899] p-3 mt-4 flex hover:bg-[#514899] hover:text-white w-fit border border-[#514899] rounded-lg transition-all">
                    {name}
                </button>
            </a>
            
        </>
        
    )
}
