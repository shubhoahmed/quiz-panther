import React from 'react';

const Blog = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is the purpose of react router?
                </div>
                <div className="collapse-content">
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                        React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does context API work?
                </div>
                <div className="collapse-content">
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is useRef describe it.
                </div>
                <div className="collapse-content">
                    <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.Essentially, useRef is like a “box” that can hold a mutable value in its .current property.<br />
                        However, useRef() is useful for more than the ref attribute. It's handy for keeping any mutable value around similar to how you'd use instance fields in classes. <br />
                        This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a current: .. object yourself is that useRef will give you the same ref object on every render.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;