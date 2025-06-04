import { Header } from './HeaderA'
import Project from './components/Project'

export default function ProjectPresentation() {
return (
<div className='flex w-full h-full justify-center font-[arial]'>
    <div className='md:w-[60vw]'>
        <Header/>
        <div className="flex flex-col gap-10 pt-12  ">
            <div>
                <h1 id="projects" className="text-4xl p-5"></h1>
                <Project/>

            </div>
        </div>
    </div>
</div>
)
}
