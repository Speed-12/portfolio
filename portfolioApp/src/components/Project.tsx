import DetailsButton from "./DetailsButton";
import DiscoverMoreButton from "./DiscoverMoreButton";

interface ProjectProps{
    img?: string;
    title: string;
    text: React.ReactNode;    
}
export default function Project({img,title,text}: ProjectProps) {
    return (
    <div className='flex w-full h-full justify-center font-[arial]'>
        <div className='flex sm:flex-row flex-col md:w-[60vw] '>
            <div className="">
                <h1>{title}</h1>
                <p>{text}</p>
                <DetailsButton name="Accéder"/>
                <DiscoverMoreButton link="/projects"/>
                <button className="Accéder"></button>
                <button className="Voir les autres projets"></button>
            </div>

            <div className="">
                <img src={img} alt="image projet" />
            </div>
        </div>
    </div>
    )
}
