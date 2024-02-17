import CircularProgress from "@mui/material/CircularProgress";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () => {
    return (
        <BrowserRouter>
        <Suspense fallback={<CircularProgress />}>
            {component()}
        </Suspense>
    </BrowserRouter>
    )
}