// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
// import Todo from "./components/Todo/Todo.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import {useEffect} from "react";
import OnlineStatus from "./components/OnlineStatus.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

// useEffect(() => {
//     const id: number = setInterval(() => console.log("tick"),1000)
//     return () => clearInterval(id)
// }, []);


function App() {

  return (
    <>
        <Layout>
        {/*<ClassComponent/>*/}
        {/*<FunctionalComponent/>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithProps*/}
        {/*    title="Is a Arrow Functional Component With Props!"/>*/}
        {/*<ArrowFunctionalComponentWithPropsType*/}
        {/*    title="Is a Arrow Functional Component With Props!"*/}
        {/*    description="This is a description of an Arrow Functional Component With Props!"/>*/}


            {/*<ClassComponentWithState/>*/}
            {/*<FunctionalComponentWithState/>*/}
            {/*<Counter/>*/}
            {/*<NameChanger/>*/}
            {/*<CounterWithMoreStates/>*/}
            {/*<CounterAdvanced/>*/}
            {/*<CounterWithCustomHook/>*/}
            {/*<CounterAdvancedWithCustomHook/>*/}

            {/*<CounterWithReducer/>*/}
            {/*<Todo/>*/}

            <OnlineStatus/>

        </Layout>
    </>
  )
}

export default App
