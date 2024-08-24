class UrlHandler {
    constructor() {

    }

    async createShortenUrl(originalUrl, customUrl) {
        try {
            const response = await fetch("http://localhost:4000/api/url", {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },  
                body:JSON.stringify({
                    originalUrl:originalUrl,
                    customUrl:customUrl,
                })
            })

            if(!response.ok){
                const errorMessage = await response.text()
                throw new Error(errorMessage)
            }

            const data = await response.json()
            return data
        } catch (error) {
            throw error
        }
    }

    async getUrl(customUrl){
        try {
            const response = await fetch(`http://localhost:4000/api/url/${customUrl}`)
            
            if(!response.ok){
                const errorMessage = await response.text()
                throw new Error(errorMessage)
            }

            const data = await response.json()
            return data
        } catch (error) {
            throw error
        }
    }
}

export const urlHandler = new UrlHandler()