

type RouteHandler = (container : HTMLElement) => void;

const routes: Record<string, RouteHandler> = {

}

export async function renderRoutes ( container:HTMLElement ) {
    let path = window.location.hash.replace('#','').split('?')[0] || '/';

    container.innerHTML = `
      
    
    `
}


