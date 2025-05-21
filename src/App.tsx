// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";


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

            <FunctionalComponentWithState/>

        </Layout>
    </>
  )
}

export default App
