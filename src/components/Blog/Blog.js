import React from 'react';

const Blog = () => {
    return (
        <div className='text-start container'>
            <div>
            <h2>1. What is the Difference between Authorization and Authentication?</h2>
            <p>Basically Authentication is the process of verifying an user identity. And Authorization is the process of verifying weather the user can access the file and resources. In example when we log in in facebook we need to give our email and password, that is Authentication. And after logged in which post and resources we can see that process is called Authorization.</p>
            </div>
            <div>
            <div>
            <h2>2. Why we use firebase? and the other options of authentication.</h2>
            <p>We use firebase basically for Authenticate an user. weather he is permitted to log in and check his log in credential. There are lots of alternatives of firebase authentication. but the most popular alternatives are Auth0, MongoDB, Passport and Okta etc.</p>
            </div>
            </div>
            <h2>3. What other services firebase provides other than Authentication?</h2>
            <p>We are using firebase in this course till the date only for Authentication purpose. But firebase provides lots of other services other than authentication. amongst them Realtime Database, Remote Config, Firebase ML, Cloud Functions, Cloud Messaging, Hosting, Cloud Storage and many mores.</p>
            <hr />
        </div>
    );
};

export default Blog;