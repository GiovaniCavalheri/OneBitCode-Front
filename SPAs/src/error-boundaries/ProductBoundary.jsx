import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ProductBoundary() {
    const error = useRouteError(); 

    // ==> Funcao que verifica se é um erro de resposta == http 
    if(isRouteErrorResponse(error)) {
        switch(error.status) {
            case 404: 
                return <h2>Ooops! Produto não encontrado! </h2> 
            case 401: 
                return <h2>Você não está autorizado a ver essa página!</h2>
            case 400: 
                return <h2>Parece que deu algo errado na requisição</h2> 
            case 500: 
                return <h2>Erro interno do servidor</h2>
        }
    }
    return <h2>Algo deu errado</h2>
}

export default ProductBoundary; 