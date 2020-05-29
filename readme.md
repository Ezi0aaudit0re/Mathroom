
<h1> Math Room </h1>
<h3> Perform calculations and see the latest 10 calculations performed </h3>

<h1> Design Decisions </h1>

<h3> Server </h3>
<ul>
    <li> Python3 with Flask as the application server </li>
    <li> Socket IO for instant communication between client and saerver </li>
    <li> We use sqlite3 database to store the calculations performed by the users </li>
    <li> We store users just on the basis of thier name </li>
    <li> SQLAlchemy is used as an ORM </li>
</ul>

<h3> Client </h3>

<ul>
    <li> We use React.js to create the client application </li>
    <li> We use socket.io-client to communicate and recieve brodcasts </li>
    <li> We used different components to handle the client. </li>
    <li> The main component is the calculator.js component which performs the calculations and listens to sockets </li>
</ul>

<h3> Deployment </h3>

<ul>
    <li> We use heroku as a deployment server for both the client and server. </li>
    <li> The client and the server are built as different applications where the server only acts as an API server</li>
</ul>

