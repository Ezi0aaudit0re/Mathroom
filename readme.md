
<h1> Math Room </h1>
<h3> Perform calculations and see the latest 10 calculations performed </h3>

<h1> Design Decisions </h1>

<h3> Server </h3>
<ul>
    <li> Python3 with Flask as the application server </li>
    <li> Socket IO for instant communication between client and saerver </li>
    <li> We use mysql database to store the calculations performed by the users </li>
    <li> We store users just on the basis of thier name </li>
    <li> SQLAlchemy is used as an ORM </li>
</ul>

<h3> Client </h3>

<ul>
    <li> We use React.js to create the client application </li>
    <li> We use socket.io-client to communicate and recieve brodcasts </li>
</ul>

