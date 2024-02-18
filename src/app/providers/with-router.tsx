import CircularProgress from "@mui/material/CircularProgress";
import { Suspense } from "react";

export const withRouter = (component: () => React.ReactNode) => () => {
    return (
        <Suspense fallback={<CircularProgress />}>
            {component()}
        </Suspense>
    )
}