import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Blog = () => {
  return (
    <div className="container mx-auto min-vh-100">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>what is cors?</Accordion.Header>
          <Accordion.Body>
            In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server
            deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS
            there. Method to setup CORS requests in react app at front-end level: In axios: Axios always use base URL to start the
            request and the browser confirms that in the beginning HTTP OPTIONS requests by itself. Many times we need to pass
            tokens for authentication and the token which we are using is identified by Bearer. Now, the main part we need to pass
            some additional headers for CORS named as Access-Control-Allow-Credentials. This one is required because the browser
            needs to confirm the server if that is allowed to access resources. In fetch: To use CORS in fetch we need to use the
            mode option and set it to cors.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works
            independently, and they work even better together.consequat.
            <br />
            Authentication is the process of identifying users that request access to a system, network, or device. Access control
            often determines user identity according to credentials like username and password. Other authentication technologies
            like biometrics and authentication apps are also used to authenticate user identity.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does the private route work?</Accordion.Header>
          <Accordion.Body>
            The react private route component renders child components ( children ) if the user is logged in. If not logged in the
            user is redirected to the /login page with the return url passed in the location state property
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
            Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking”
            approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to
            return.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
