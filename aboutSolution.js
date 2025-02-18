```javascript
// pages/about.js

export default function About() {
  const message = "This is the About Page"; // Declare the variable
  console.log(message); // Use the declared variable
  return (
    <div>
      <h1>About Page</h1>
      <p>{message}</p>
    </div>
  );
}
```