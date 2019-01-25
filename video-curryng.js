// // Main concept
// const mult2 = x => {
//   return y => {
//     return x * y;
//   };
// };
// const responseMult2 = mult2(2)(3);
// responseMult2; //?

// const sum3 = x => y => z => x + y + z;
// const responseSum3 = sum3(1)(2)(3);
// responseSum3; //?

// // Currying as HOF
// const sum2 = (x, y) => x + y;
// const mult2normal = (x, y) => x * y;
// const curryHOF = f => a => b => f(a, b);
// const responseCurryHOF = curryHOF(mult2normal)(1)(2);
// responseCurryHOF; //?

// Usage in React

// export default connect(mapStateToProps)(App)

const getName = () => "Zorak";

const component = (props => {
  return {
    title: 'teste'
  };
})()

const withName = wrappedComponent => props => {
  let name;
  name //?
  name = getName();
  wrappedComponent.title //?
  wrappedComponent.name = name;
  return wrappedComponent;
};

const wrapperComponent = withName(component)();

wrapperComponent; //?
