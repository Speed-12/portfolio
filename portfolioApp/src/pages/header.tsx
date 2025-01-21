export async function renderHeader (container:HTMLElement) {
    container.innerHTML = `
    
    <div class="">   
        <nav class="flex flex-row ">   
            <div> 
                <h1> Lucas Piou </h1>
            </div>
            
            <div class="flex flex-row gap-2">   
                <ul> 
                    <li> hard-skills </li>
                    <li> soft-skills </li>
                    <li> projects </li>
                    <li> CV </li>
                </ul>
            </div>
        </nav>
    </div>    
    
    
    `
} 