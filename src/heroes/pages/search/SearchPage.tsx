import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

const SearchPage = () => {
    return (
        <>
            <CustomJumbotron
                title="Busqueda de superHeroes"
                description="Descubre, explora y administra super heroes y villanos"
            />
            <HeroStats />
            {/* Filters and Controls section */}
            <SearchControls />
        </>
    )
}
export default SearchPage;