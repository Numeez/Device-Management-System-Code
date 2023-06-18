import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.engine.cio.*
import io.ktor.client.request.*
import io.ktor.client.statement.*

import io.ktor.http.*

suspend fun fetchData(){
    val client = HttpClient(CIO)
    val response:HttpResponse = client.post("http://localhost:7171/signIn"){
        url{
            parameters.append("email","numeezbaloch17@gmail.com")
            parameters.append("password","numeezkoko")
        }
    }

    println(response.bodyAsText())


    client.close()

}