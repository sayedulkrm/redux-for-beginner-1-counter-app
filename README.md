<!-- At first have to define the State -->

<!-- State -->

For example--- In the counter app the state is [ Count = 0 ]

<!-- Action -->

Increment the counter
Decrement the counter
Reset the counter

<!-- Reducer || Logic building || How can i do that ( incrasing, decrasing, rest ) -->

Increment = (Previous count value) => counter + 1

<!-- Here in increment, its adding [(count) => count +1]  -->

Decrement = (Previous count value) => counter - 1
Reset = counter = 0

<!-- Store. install Package "npm i redux". To create store -->

Creating store in 'src' folder, or any where possible

<!-- Providing Store in react. Install "npm i react-redux". -->

After create the "Store" we have to use it "React". We have to provide the store in react.
NOTE: ALWAYS USE PROVIDER IN PARENT COMPONENTS. SUCH AS: "index.js". Wrap like that.

        <Provider store={store}>
            <App />
        </Provider>

<!-- Using the Store -->
