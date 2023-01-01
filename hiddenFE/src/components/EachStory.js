import { useParams } from "react-router-dom"
import EachStoryMain from "./EachStoryMain";
import ShareNavbar from "./ShareNavbar"
import useFetch from "./useFetch";
import Loader from "./Loader";
import { useEffect, useState } from "react";

const EachStory = () => {

    const [story, setStory] = useState();
    const {id} = useParams();
    const {data, isPending, error} = useFetch(`https://hidden-app.up.railway.app/${id}`)
    console.log(data);
    
    useEffect(() => {
        if (isPending === false) {
            setStory(data)
        }
    }, [isPending, data])

    return (
        <div className="each-story">
            <ShareNavbar/>
            { error && <div>{error}</div> }
            { isPending && <Loader/> }
            { story && <EachStoryMain story={story}/>}
        </div>
    )
}

export default EachStory
