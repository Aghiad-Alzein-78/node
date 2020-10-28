const url =require('url')
const print=require('../utility.js')

const myURl=new URL("http://mywebsite.com/hello.html?id=100&&status=active")

//serialize url
print(myURl.href)
print(myURl.toString())

//host (root domain)
//hostname doesn't get the port number
print(myURl.hostname)

//host get the url + port
print(myURl.host)

//to get the pathname 
print("Path:",myURl.pathname)

//serialize the query return string like '?id=100&&status=active'
print(myURl.search)

//get object of  type URLSearchParams
print(myURl.searchParams)

myURl.searchParams.append("Name","Aghiad")

print(myURl.searchParams)

myURl.searchParams.forEach((key,value)=>{
    print(key,':',value)
})