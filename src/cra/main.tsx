import { StaticRouter } from "react-router-dom/server";
import App from "./App.tsx";
import "./App.css";

export default ({ pathname }: { pathname: string }) => {
    return <StaticRouter location={pathname}>
        <App/>
    </StaticRouter>
}
