To commit. Write the message, then ESC, and type :wq then ENTER
Also git fetch, git status are really useful
Codepen is a great place to find examples


### HTML EXAMPLES

### Document Layout
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title Here</title>
</head>

<body>
    <!-- Content Goes Here -->
</body>

</html>

### Headings
<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading 4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6</h6>

### Paragraphs

 <p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<br> <!-- Line Break -->

### Links

<a href="https://www.example.com">Visit Example</a>

### Unordered List
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

### Ordered List
<ol>
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item</li>
</ol>

### Images
<img src="image.jpg" alt="Description">

### Forms
<form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <button type="submit">Submit</button>
</form>

### Tables
<table border="1">
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
    </tr>
    <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
    </tr>
</table>

### Comment
<!-- This is a comment -->


### CSS

### Selectors
/* Element Selector */
p {
    color: red;
}

/* Class Selector */
.className {
    font-size: 18px;
}

/* ID Selector */
#uniqueId {
    background-color: #ffee00;
}

### Text Styling
/* Font Size */
font-size: 16px;

/* Font Family */
font-family: Arial, sans-serif;

/* Font Weight */
font-weight: bold;

/* Text Color */
color: #007bff;

/* Text Alignment */
text-align: center;

/* Text Decoration */
text-decoration: underline;

### Box Model
/* Width and Height */
width: 200px;
height: 100px;

/* Margin */
margin: 10px;

/* Padding */
padding: 20px;

/* Border */
border: 1px solid #000;

### Background
/* Background Color */
background-color: #f0f0f0;

/* Background Image */
background-image: url('background.jpg');

/* Background Size */
background-size: cover;

### Flexbox
/* Flex Container */
display: flex;

/* Justify Content */
justify-content: center;

/* Align Items */
align-items: center;

### Positions
/* Position */
position: relative;

/* Top, Right, Bottom, Left */
top: 10px;
right: 20px;
bottom: 10px;
left: 20px;

/* Z-Index */
z-index: 1;

### Animations
/* Transitions */
transition: all 0.3s ease;

/* Animations */
@keyframes slide {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}
### Comments
/* This is a CSS comment */

### JS

### Variables
// Variable Declaration
let variableName = "Hello, World!";
const constantVariable = 42;

// Data Types
let number = 42;
let string = "Hello";
let boolean = true;
let array = [1, 2, 3];
let object = { key: "value" };

### Maths
// Arithmetic Operators
let sum = 5 + 10;
let difference = 20 - 8;
let product = 3 * 7;
let quotient = 10 / 2;
let remainder = 15 % 4;

// Comparison Operators
let isEqual = 5 === "5";
let isNotEqual = 10 !== 5;
let isGreater = 8 > 3;
let isLess = 4 < 9;

### Loops
// If Statement
if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}

// For Loop
for (let i = 0; i < 5; i++) {
    // Code to repeat 5 times
}

// While Loop
let count = 0;
while (count < 3) {
    // Code to repeat until count is 3
    count++;
}

### Functions
// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function Expression
const greet = function(name) {
    return "Hello, " + name + "!";
};

// Arrow Function
const greet = (name) => {
    return "Hello, " + name + "!";
};

### Objects
// Object Creation
let person = {
    name: "Alice",
    age: 30,
    isEmployed: true,
    greet: function() {
        return "Hello!";
    }
};

// Accessing Object Properties
let personName = person.name;
let personAge = person["age"];

### Arrays
// Array Creation
let colors = ["red", "green", "blue"];

// Accessing Array Elements
let firstColor = colors[0];
let arrayLength = colors.length;

// Array Methods
colors.push("yellow"); // Adds an element to the end
colors.pop(); // Removes the last element

### Promises, Async and Await
// Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Async operation, then:
        if (success) {
            resolve(data);
        } else {
            reject(error);
        }
    });
};

// Async/Await
const getData = async () => {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};


### JSON

### JSON Data
{
  "name": "John Doe",
  "age": 30,
  "isEmployed": true,
  "address": {
    "street": "123 Main St",
    "city": "Exampleville",
    "postalCode": "12345"
  },
  "languages": ["English", "Spanish"],
  "isMarried": false
}

### Dot Notation For Property
jsonData.name // Output: "John Doe"

### Nested Dot For Nested Property
jsonData.address.city // Output: "Exampleville"

### Accessing Arrays
jsonData.languages[1] // Output: "Spanish"

### Converting JSON
const obj = { key: "value" };
const json = JSON.stringify(obj);

const jsonString = '{"key": "value"}';
const obj = JSON.parse(jsonString);

### Uses
Sending Data: JSON is commonly used for sending data between a server and a web application.
Configuration Files: JSON files are used for configuration settings in applications.
API Responses: Many APIs return data in JSON format.

### PWS Shortcut
Command	Purpose
pm2 ls	List all of the hosted node processes
pm2 monit	Visual monitor
pm2 start index.js -n simon	Add a new process with an explicit name
pm2 start index.js -n startup -- 4000	Add a new process with an explicit name and port parameter
pm2 stop simon	Stop a process
pm2 restart simon	Restart a process
pm2 delete simon	Delete a process from being hosted
pm2 delete all	Delete all processes
pm2 save	Save the current processes across reboot
pm2 restart all	Reload all of the processes
pm2 restart simon --update-env	Reload process and update the node version to the current environment definition
pm2 update	Reload pm2
pm2 start env.js --watch --ignore-watch="node_modules"	Automatically reload service when index.js changes
pm2 describe simon	Describe detailed process information
pm2 startup	Displays the command to run to keep PM2 running after a reboot.
pm2 logs simon	Display process logs
pm2 env 0	Display environment variables for process. Use pm2 ls to get the process ID

### Endpoint Testing
Use JSON to write tests.
Using test driven development (TDD) for testing service endpoints is a common industry practice. Testing services is usually easier than writing UI tests because it does not require a browser. However, it does still take effort to learn how to write tests that are effective and efficient. Making this a standard part of your development process will give you a significant advantage as you progress in your professional career.

As demonstrated by the following State of JS survey, there are lots of good testing packages that work well with Express driven services. We are going to look at the current champion Jest.

### Storage
There are many such solutions out there, but one of the most popular ones is AWS S3. S3 provides the following advantages:

It has unlimited capacity
You only pay for the storage that you use
It is optimized for global access
It keeps multiple redundant copies of every file
You can version the files
It is performant
It supports metadata tags
You can make your files publicly available directly from S3
You can keep your files private and only accessible to your application
In this course we will not be using any storage services for the Simon project. If, however, you want to use S3 as the storage service for your Startup application, then you need to learn how to use the AWS SDK. You can find detailed information about using AWS S3 with Node.js on the AWS website. Generally, the steps you need to take include:

Creating a S3 bucket to store your data in.
Getting credentials so that your application can access the bucket.
Using the credentials in your application.
Using the SDK to write, list, read, and delete files from the bucket.

### Deploy
How to Deploy since I keep forgeting where my pemkey is:
./deploy.sh -k ~/.ssh/CS260.pem -h domain -s subdomain

### Log-In
The public/index.html, public/login.js, and public/login.css files provide all the login UI. Bootstrap provides the styling for the controls.

When index.html is loaded an anonymous function in login.js determines if the user is already authenticated and uses that state to hide or show the login controls.

When a user logs in, logs out, or creates credentials the service endpoints are called.

The application service uses a secure cookie to store the authorization token for an authenticated user.

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
Note the use of secure, httpOnly, and sameSite. Make sure you are familiar with what each of these mean.

When a user is logged in, the cookie is added. When a user makes a secure request, the cookie is checked. When the user logs out, the cookie is removed.

### Final!!!
### What ports are used for HTTP, HTTPS, SSH?
HTTP typically uses port 80, while HTTPS (HTTP over TLS/SSL) uses port 443. SSH (Secure Shell) commonly uses port 22. 

### What do HTTP status codes in the 300, 400, 500 range indicate?
300 Range (Redirection):

300 Multiple Choices: The requested resource has multiple representations, each with its own specific location, and the user or user agent can choose among them.
301 Moved Permanently: The requested resource has been permanently moved to a new location, and the URL of the new location is provided.
302 Found (or Moved Temporarily): The requested resource is temporarily located at a different location, but the client should continue to use the original URL.
304 Not Modified: Indicates that the resource has not been modified since the last requested time. Used in response to a conditional GET request, indicating that the requested resource has not been modified.
400 Range (Client Errors):

400 Bad Request: The server cannot or will not process the request due to a client error, e.g., malformed request syntax, invalid request message framing, or deceptive request routing.
401 Unauthorized: Similar to 403 Forbidden, but specifically for cases where authentication is required and has failed or has not been provided.
403 Forbidden: The client does not have the necessary permissions to access the requested resource.
404 Not Found: The server cannot find the requested resource. It might be temporarily unavailable or permanently removed.
500 Range (Server Errors):

500 Internal Server Error: A generic error message indicating that an unexpected condition was encountered on the server, and no more specific message is suitable.
501 Not Implemented: The server does not support the functionality required to fulfill the request.
502 Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.
503 Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance of the server.

### What does the HTTP header content-type allows you to do?
The Content-Type HTTP header allows the sender to indicate the media type of the resource being sent or, in the case of the POST or PUT methods, the media type that is acceptable for the response.

Here are some common use cases of the Content-Type header:

Specify the Media Type of the Request or Response:

For example, when a client sends a request to a server, it includes the Content-Type header to indicate the media type of the data being sent. This helps the server understand how to interpret the payload.
Handle Different Data Formats:

The Content-Type header is essential when dealing with different data formats, such as JSON, XML, HTML, or form data. For instance, if a client is sending JSON data in the request body, it would include Content-Type: application/json.
Negotiate Content Type in Responses:

When a server sends a response, it uses the Content-Type header to inform the client about the media type of the content. The client can then process the content accordingly.
Support Content Negotiation:

Content negotiation allows a client and a server to agree on the most appropriate content type for a given request. The Accept header in the request and the Content-Type header in the response are used for this purpose.
Here are some examples of Content-Type values:

text/html: HTML content
application/json: JSON data
application/xml: XML data
multipart/form-data: Form data used in file uploads
application/x-www-form-urlencoded: URL-encoded form data

### What do the following attributes of a cookie do?
Domain
Path
SameSite
HTTPOnly
Domain:

Purpose: Specifies the domain for which the cookie is valid. The browser includes the cookie in the request only if the domain of the request matches the specified domain of the cookie.
Example: If a cookie has the domain attribute set to ".example.com," it will be sent to all subdomains of "example.com."
Path:

Purpose: Defines the subset of URLs on the domain for which the cookie is valid. The cookie will only be sent to the server if the path in the request URL matches the specified path of the cookie.
Example: If a cookie has the path attribute set to "/blog," it will be sent to requests under "/blog" on the specified domain.
SameSite:

Purpose: Determines when the cookie should be sent in cross-site requests. It is a security measure to prevent cross-site request forgery (CSRF) and cross-site scripting (XSS) attacks.
Possible Values:
Strict: The cookie is only sent in a first-party context (i.e., the request originated from the same site).
Lax: The cookie is sent in a first-party context and in top-level navigations initiated by GET requests from other sites.
None: The cookie is sent in all contexts, including cross-origin requests. Requires the Secure attribute if not sent over HTTPS.
Example: SameSite=Lax or SameSite=None; Secure (for cross-site cookies over HTTPS).
HttpOnly:

Purpose: When set, the cookie is not accessible through client-side scripts (e.g., JavaScript). This helps mitigate the risk of certain types of cross-site scripting attacks.
Example: HttpOnly

### Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?
Given the following Express service code: What does the following JavaScript fetch return?
Given the following MongoDB query

{ cost: { $gt: 10 }, name: /fran.*/}

{ cost: { $gt: 10 } }: This part of the query is looking for documents where the "cost" field is greater than 10.
{ name: /fran.*/ }: This part is looking for documents where the "name" field matches the regular expression /fran.*/, which means it starts with "fran."
So, the query is looking for documents in the MongoDB collection where the "cost" is greater than 10 and the "name" starts with "fran."

Fetch API in JavaScript:
You mentioned a JavaScript fetch, but the code for the fetch operation is not provided. The fetch function is used to make HTTP requests, typically to retrieve data from a server. Without the specific code, it's not possible to determine what the fetch operation returns.

### How should you store user passwords in a database?
toring user passwords securely is a critical aspect of web application security. Passwords should never be stored in plaintext due to the risk of unauthorized access if the database is compromised. Instead, a combination of hashing and salting is commonly used. 

### What is the WebSocket protocol used for?
The WebSocket protocol is a communication protocol that provides full-duplex communication channels over a single, long-lived connection. It is designed to be used by web browsers and web servers, enabling real-time, bidirectional communication between them. The WebSocket protocol is specified in RFC 6455.

### What is JSX and how are the curly braces rendered?
JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to XML or HTML. It is commonly used with React, a popular JavaScript library for building user interfaces. JSX allows developers to write UI components in a syntax that resembles HTML but gets transpiled into JavaScript.

In JSX, you can include JavaScript expressions by wrapping them in curly braces {}. These curly braces are used to embed dynamic content, variables, or JavaScript expressions within the JSX code. 
import React from 'react';

const MyComponent = () => {
  const name = 'John Doe';

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a JSX component with dynamic content.</p>
    </div>
  );
};

export default MyComponent;

### Assuming a HTML document with a 
<div id="root"></div>
element, what content will the following React component generate?
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      function App() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);

      <div id="root">
  <div>
    <h1>Hello, Sara</h1>
    <h1>Hello, Cahal</h1>
    <h1>Hello, Edite</h1>
  </div>
</div>
The App component renders a div element containing three instances of the Welcome component.
Each Welcome component renders an h1 element with the text "Hello, " followed by the value of the name prop.
The ReactDOM.createRoot function is used to create a root instance associated with the HTML element with the ID "root."
The root.render(<App />) call renders the App component into the specified root element, resulting in the generated HTML structure.

### Assuming a HTML document with a 
<div id="root"></div>
element, what content will the following React component generate?
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);

    <div id="root">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</div>
Explanation:

The Numbers component creates an array numbers containing the values [1, 2, 3, 4, 5].
The map function is used to create a list of li elements, each containing one of the numbers from the array.
The ul element wraps the list of li elements.
The ReactDOM.createRoot function creates a root instance associated with the HTML element with the ID "root."
The root.render(<Numbers/>) call renders the Numbers component into the specified root element, resulting in the generated HTML structure.

### What does the following React component do?
function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
The provided React component is a functional component called Example that demonstrates the use of React Hooks, specifically the useState hook. This component creates a simple counter with a paragraph displaying the number of times a button has been clicked. Here's a breakdown of how it works:

State Initialization:

The useState hook is used to declare a state variable named count with an initial value of 0. The useState hook returns an array where the first element is the current state value (count), and the second element is a function (setCount) that allows updating the state.
javascript
Copy code
const [count, setCount] = useState(0);
Rendering:

Inside the return statement, JSX is used to render a div containing a p (paragraph) element and a button element.
jsx
Copy code
<div>
  <p>You clicked {count} times</p>
  <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
</div>
Displaying the Counter:

The paragraph displays the current value of the count state variable. The value is interpolated within the text using curly braces {}.
jsx
Copy code
<p>You clicked {count} times</p>
Button Click Event:

The button has an onClick event handler that increments the count state when the button is clicked. It uses the setCount function to update the state based on the current state value.
jsx
Copy code
<button onClick={() => setCount(count + 1)}>
  Click me
</button>
Note that the setCount function takes the current state value (count) and increments it by 1.

### What are React Hooks used for?
React Hooks are functions that allow functional components to use state, lifecycle methods, and other React features without the need for class components. They were introduced in React 16.8 to address the challenges of managing state and side effects in functional components. Hooks provide a more direct way to work with component state and lifecycle in functional components.

### What is the useEffect hook used for?
The useEffect hook in React is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, manually changing the DOM, or any operation that involves interacting with external resources. The useEffect hook is a replacement for lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

The basic syntax of useEffect is as follows:

javascript
Copy code
useEffect(() => {
  // Side effect code here
  // It will run after every render
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);

### What does this code do?
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
When the path is "/", the Layout component is rendered.
When the path is "/blogs", the Blogs component is rendered.
When the path is "/contact", the Contact component is rendered.
If none of the above paths match, the NoPage component is rendered (the wildcard * path).
This code sets up a basic navigation structure for a React application using React Router, defining different views for specific paths. The components Layout, Home, Blogs, Contact, and NoPage are expected to be defined elsewhere in the application.

### What role does npm play in web development?
Package Management:

npm is primarily known for managing and distributing packages or libraries of reusable code. Developers can use npm to easily install, update, and manage dependencies in their projects. These dependencies could be libraries, frameworks, tools, or any other code modules.
Dependency Management:

In a typical web development project, developers rely on various third-party libraries and tools to enhance functionality and streamline development. npm helps manage these dependencies by tracking versions, handling dependencies of dependencies, and ensuring that the correct versions are installed.
Script Running:

npm allows developers to define and run scripts using the scripts section in the package.json file. This is commonly used for tasks such as running development servers, building projects, testing, and more. It simplifies the process of executing common tasks within a project.
Version Control:

npm provides a versioning system that allows developers to specify the version ranges of dependencies in their projects. This helps ensure consistency and allows for updates without breaking existing functionality. Developers can also take advantage of semantic versioning (SemVer) to specify version constraints.
Registry:

npm acts as a registry where developers can publish and share their own packages. The npm registry is a centralized repository that hosts a vast number of open-source packages, making it easy for developers to discover, share, and reuse code.
Global and Local Installations:

npm allows developers to install packages either globally (accessible throughout the system) or locally (specific to a particular project). This flexibility enables efficient management of dependencies based on the scope and requirements of a project.
Development Workflow:

npm is an integral part of the development workflow, especially in projects built using Node.js. It simplifies the setup of a new project, facilitates collaboration among developers, and streamlines the deployment process.
Community Collaboration:

npm fosters collaboration within the developer community by providing a platform for sharing code. Developers can contribute to open-source projects, report issues, and collaborate on improvements through the npm ecosystem.

### What does package.json do in a npm project?

The package.json file in an npm (Node Package Manager) project serves as a configuration file that provides information about the project and its dependencies. It is a crucial part of the npm ecosystem and is used for various purposes. 

### What does the fetch function do?
The fetch() function is a modern web API in JavaScript that provides an easy and flexible way to make HTTP requests and handle responses. It is commonly used to retrieve data from a server or send data to a server in web applications. The fetch() function returns a Promise that resolves to the Response to that request, whether it is successful or not.

### What does node.js do?
Node.js is a server-side JavaScript runtime that allows developers to run JavaScript code on the server. It is built on the V8 JavaScript runtime engine, the same engine that powers Google Chrome. Node.js provides a non-blocking, event-driven architecture that is well-suited for building scalable and high-performance network applications.

### What does Vite do?

Vite is a build tool for web development that is designed to optimize and streamline the development experience, especially for modern frontend frameworks like Vue.js and React. The name "Vite" is derived from the French word for "fast," highlighting its emphasis on fast development and build times. 
