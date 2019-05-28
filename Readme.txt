I decided to use Next.js with Typescript integration as a base for this project. This allowed me to quickly spin up a Node backend. I integrated it with Express, and customised it to allow for server-side rendering.

Typescript was used to ensure the component props and component types were correct and safe. Although all the data returned from the API was in string format, the Attribute component does include an optional prop.

I used Jest (with Enzyme for React support) to write some simple unit tests for the Character component.

Isomorphic-unfetch was used to perform a fetch on the Node server.

Styled-JSX was used to style the components. Having never used it before, I wanted to see how it compared to standard external stylesheets, or inline styles.

If I were to spend more time on the project, I would update the styles to something a bit more appealing. I would also write more unit tests to maximise the coverage.



--- Run yarn to install dependencies, then yarn dev to run the dev server on localhost:5000