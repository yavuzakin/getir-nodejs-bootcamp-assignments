# week-2-assignment
* Create a web server using HTTP module.
* Redirect the requests sent by the client to the requested urls and respond with a message like "Home Page".
* Log all the requests coming from the client to a file using FS module.
* Redirect requests with 404 warning for undefined urls.

#### Click <a href="https://github.com/yavuzakin/getir-nodejs-bootcamp-assignments/tree/main">here</a> to go back to main branch.

# Description
All the requirements stated above are met. Log messages are saved into log.txt file asynchronously so that not to block event loop in the case of multiple requests made simultaneously to the server.
Working urls: 
* /
* /home
* /about-us
* /products
All the other requests are responded by 404. 