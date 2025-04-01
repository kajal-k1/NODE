let http=require('http')
let server=http.createServer((request,response)=>{
console.log(request.url)
if(request.url== '/About'){
    response.write("<h1> Welcome to About page </h1>")
    response.end()
}
else if(request.url=='/content'){
    response.write("<h1> Welcome to CContent page </h1>")
    response.end()
}
 else if(request.url=='/contact'){
    response.write("<h1> Welcome to Contact page </h1> ")
    response.end()
}


else if(request.url=='/blog'){
    response.write("<h1> Welcome to BLOG page</h1>")
    response.end()
}
else{
    response.write(`<h1> Welcome to HTTP server </h1>
<ul>
    <li style="display:inline-block;text-decoration:"><a href='/about'>about</a></li>
<li style="display:inline-block;text_decoration:none"><a href='/contact'>contact</a></li>
<li style="display:inline-block;text_decoration:none"><a href="content">content</a></li>
<li style="display:inline-block;text_decoration:none"><a href="content">content</a></li>
<li style="display:inline-block;text_decoration:none"><a href="blog">blog</a></li>
</ul>



`)
    response.end()
    




}
});
server.listen(3000)
