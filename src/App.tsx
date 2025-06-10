// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Layout from "./components/Layout.tsx";
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
// import OnlineStatus from "./components/OnlineStatus.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
// import  HomePage  from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import FocusInput from "./components/FocusInput.tsx";

// useEffect(() => {
//     const id: number = setInterval(() => console.log("tick"),1000)
//     return () => clearInterval(id)
// }, []);




function App() {

  return (
    <>
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

            {/*<OnlineStatus/>*/}

        <BrowserRouter>
            {/*<Layout>*/}
                <Routes>
                    {/*<Route path="/" element={<HomePage/>}/>*/}

                    <Route element={<RouterLayout />}>
                        {/*<Route index element={<HomePage/>}/>*/}
                        <Route index element={<FocusInput/>}/>
                        <Route path="users/:userId" element={<UserPage/>}/>
                        <Route path="users" element={<UserPage />}/>
                    </Route>

                    {/*<Route path="examples?"/>*/}
                    <Route path="examples" element={<RouterExamplesLayout/>}>
                        <Route index element={<ExamplesPage/>}/>
                        <Route path="name-changer" element={<NameChangerPage/>}/>
                        <Route path="online-status" element={<OnlineStatusPage/>}/>
                        <Route path="auto-redirect" element={<AutoRedirectPage/>}/>
                    </Route>
                    <Route path="users/:userId" element={<UserPage/>}/>
                    <Route path="users" element={<UserPage />}/>
                    {/*<Route path="files/*" element={<FilePage/>}/>*/}

                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            {/*</Layout>*/}
        </BrowserRouter>

    </>
  )
}

export default App
