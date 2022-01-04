import { useParams } from "react-router-dom"
import EachStoryMain from "./EachStoryMain";
import ShareNavbar from "./ShareNavbar"
import useFetch from "./useFetch";
import Loader from "./Loader";

const EachStory = () => {

    const {id} = useParams();

    const {data, isPending, error} = useFetch(`http://localhost:8000/${id}`)

    return (
        <div className="each-story">
            <ShareNavbar/>
            { error && <div>{error}</div> }
            { isPending && <Loader/> }
            { data && <EachStoryMain story={data}/>}
        </div>
    )
}

export default EachStory
