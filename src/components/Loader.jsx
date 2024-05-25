import Spinner from "./Spinner";

function Loader({ loading }) {
    return (
        <>{loading ? <Spinner loading={loading} /> : ''}</>
    )
}
export default Loader;