import { ClipLoader } from "react-spinners";

function Spinner({ loading }) {
    return (
        <ClipLoader
            color={"#000000"}
            loading={loading}
            cssOverride={{ display: "block", margin: "0 auto" }}
            size={60}
        />
    )
}

export default Spinner;