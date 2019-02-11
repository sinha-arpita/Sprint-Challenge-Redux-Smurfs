
1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?
    
Ans1:map() ,filter(),reduce() are the Array Methods which doesn't produce side-effects.
 
2.  Describe `actions`, `reducers` and the `store` and their role in Redux.
    What does each piece do? Why is the store known as a 'single source of truth' in a redux
     application?
     
 ANS2.action:
  The Redux store is read only.The only way to modify application state when using Redux is by dispatching actions.
  We can use action creators and the react-redux library in order to dispatch those actions.
  Actions in Redux are packets of information that contain an action type and some data that
  we want associated with that action type.An action is simply an object with up to two 
  properties - a type property and an optional payload property.
  The type property is a string that explains what interaction just happened.
  The payload property is data that goes along with that interaction.
  Actions are “dispatched” to our reducer  passed in to the reducer function as an argument.
  When our reducer recieves and action, it will know how to update the state
  according to the type and payload on the action.
  
  store:-Everything that changes within your application will be represented by a single 
  JavaScript Object known as the store. The store contains our state for our application,
  The Redux store is read only. The only way to modify application state when using Redux is 
  by dispatching actions.

   reducer:When an action is dispatched, it flows through all Reducers. This key principle is 
   one of the patterns by which Redux was built. Reducers are pure functions, meaning they
   don’t produce any side-effects.Reducers will NEVER update state directly, but will always 
   return a new object. 
   
   The  store is  known as a 'single source of truth' in a redux application because
   The state of our whole application is stored in an object tree within a single store.,the
    only way to change the state is to emit an action, an object 
   describing what happened.Changes are made with pure functions
   To specify how the state tree is transformed by actions, we write pure reducers.
 
3.  What is the difference between Application state and Component state?
Ans.Your application state is global, and your component state is local.
    Redux,or flux use what they call "stores" to hold application state. That means any 
    component, anywhere in the app can access it (kind of like a database) so long as they 
    hook into it
    Component state however, lives within that specific component. As such, it can only be 
    updated within that component and passed down to its children via props.
    

4.  Describe `redux-thunk`, what does it allow us to do?
    How does it change our `action-creators`?
    
 Ans.The Reducers are synchronous by default. If we need to perform asynchronous operations, 
      they need to happen before the actions flow through the reducers stack.
      We can use middleware to handle asynchronous requests.
      Redux Thunk is a middleware created by Dan Abramov, that provides the ability to
      handle asynchronous operations inside our Action Creators.
      We can do this because  Redux middleware can intercept the normal Redux flow,
      and do something before actions make it to the reducer.When an action creator is called, 
      redux-thunk will intercept and look at what is returned. If the thing returned is an action,
      it will forward the action through to the reducer. But, if the thing returned is a function,
      a thunk (a function returned from a function), 
      then it will invoke that function and pass in the dispatch function as an argument to it. 
      That thunk that is returned by an action creator has access to the dispatch function. So we
     can run an async function, like an API call, and inside the .then() we can dispatch an
      action.

    
    
