import { useParams } from "react-router"

export const HeroPage = () => {
    // console.log({ params })
    const { idSlug } = useParams()
    return (
        <div>HeroPage</div>
    )
}
