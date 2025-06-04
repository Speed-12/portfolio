interface DiscoverMoreButtonProps {
    link: string; 
}

export default function DiscoverMoreButton({ link }: DiscoverMoreButtonProps) {
    return (
    <a href={link}>
        <button className="flex self-end w-fit mx-4 px-10 py-3 text-md bg-[#514899] text-white p-2 mt-4 hover:scale-105 rounded-lg transition-all">
            Découvrir plus
        </button>
    </a>
    )
}
