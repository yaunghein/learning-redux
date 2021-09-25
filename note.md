1. Constants => single source of truth for action types
2. Action Creators => return action object that contains type and payload
3. Reducers => accept previous state and action, and return new state based on dispatch action
4. Use redux-thunk when we need to do async task in redux. Then, action creators will return
   function that has two parameters(dispatch, getState) instead of an action object. We can make
   API calls inside components, but it's better to keep them inside action creators, so that there
   will be less codes inside components.
