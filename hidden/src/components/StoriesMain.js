import Story from './Story'

const StoriesMain = ({stories}) => {


    return (
             <>
            {stories.map(story => {
                return <Story key={story.id} story={story} />
            })}
            </>
    )
}

export default StoriesMain
