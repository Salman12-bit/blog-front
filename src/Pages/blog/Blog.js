import React from "react";
import "./blog.css"

const Blog = () => {
    return (
        <div className="background-radial-gradient overflow-hidden">
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
                <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
            </div>
            <div className="container px-4 py-5 px-md-5 my-5" style={{ zIndex: 10 }}>
                <div className="row">
                    <div className=" second col-12 first my-5">
                        <h2 className="my-4">How to Create blogging Website Using React Js For Beginners</h2>
                        <h5 className="step">Creating a blogging website using React.js involves building a front-end user interface and integrating it with a backend to manage data. Here are some basic tips  on how to do it:</h5>
                        <h3 className="mt-4 up">1. Set Up Your Development Environment:</h3>
                        <ul className="mar">
                            <li>Ensure you have the Node.js package install that is used to edit your code and npm installed on your system.</li>
                            <li>Create a new React project using Create React App (npm install new-react-app). </li>
                        </ul>
                        <h3 className="mt-4 up">2. Create necessary components:</h3>
                        <ul className="mar">
                            <li>Identify the components you need for your blogging website, such as header, footer, sidebar, and individual blog post components.</li>
                            <li>Create React components for each part of your website. For example:</li>
                            <li>'Header.js'</li>
                            <li>'Footer.js'</li>
                            <li>'Sidebar.js'</li>
                            <li>'Blogpost.js'</li>
                            <li>'Bloglist.js' (to display a list of blog posts)</li>
                        </ul>
                        <h3 className="mt-4 up">3. Set up routing:</h3>
                        <ul className="mar">
                            <li>Install React Router (npm install react-router-dom)</li>
                            <li>Define routes for different pages of your blog website, such as the homepage, individual blog posts, and category pages.</li>
                            <li>Set up navigation links and use the Link component provided by React Router to navigate between pages.</li>
                        </ul>
                        <h3 className="mt-4 up">4. Manage state:</h3>
                        <ul className="mar">
                            <li>Decide how you want to manage the state in your application. You can use React's built-in state management or libraries like Redux or Context API.</li>
                            <li>Define the state variables you need, such as the list of blog posts or the currently selected category.</li>
                            <li>Update the state as needed, for example, when fetching data from an API or when the user interacts with the website.</li>
                        </ul>
                        <h3 className="mt-4 up">5. Fetch data:</h3>
                        <ul className="mar">
                            <li>Decide where you'll be storing your blog post data. It could be in a JSON file, a database, or fetched from an external API.</li>
                            <li>Use 'fetch' or a library like Axios to retrieve blog post data from your data source.</li>
                            <li>Update the state with the fetched data and pass it down to the appropriate components as props.</li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <video className="video" src="./videos/hacks.mp4" controls={true} width="100%" />
                    </div>
                    <div className="second col-12 my-5 first">
                        <h3 className="mt-4 up">6. Create the blog layout and design:</h3>
                        <ul className="mar">
                            <li>Use CSS (or a preprocessor like Sass) to style your components and create a visually appealing layout for your blog website.</li>
                            <li>Ensure your website is responsive and works well on different screen sizes and devices.</li>
                        </ul>
                        <h3 className="mt-4 up">7. Add features and functionality:</h3>
                        <ul className="mar">
                            <li>Implement features like pagination, search functionality, and category filtering based on your requirements.</li>
                            <li>Add functionality for users to create accounts, log in, and leave comments on blog posts if necessary.</li>
                        </ul>
                        <h3 className="mt-4 up">8. Testing and optimization:</h3>
                        <ul className="mar">
                            <li>Test your blog website thoroughly to ensure it works as expected and is bugs-free.</li>
                            <li>Optimize the performance of your website by minimizing the bundle size, optimizing images, and improving loading times.</li>
                        </ul>
                        <h3 className="mt-4 up">9. Deploy your blog website:</h3>
                        <ul className="mar">
                            <li>Once you're satisfied with your blog website, deploy it to a hosting platform like Netlify, Vercel, or GitHub Pages.</li>
                        </ul>
                        <h3 className="mt-4 up">10. Maintenance and updates:</h3>
                        <ul className="mar">
                            <li>Regularly update your blog website with new content and features.</li>
                            <li>Monitor performance and user feedback, and make improvements as needed.</li>
                        </ul>
                        <p className="mar" >Following these steps, you can create a fully functional blog website using React.js. Remember to continuously iterate and improve your website based on user feedback and changing requirements.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;