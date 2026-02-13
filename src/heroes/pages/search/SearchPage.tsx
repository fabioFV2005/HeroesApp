import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

const SearchPage = () => {
    return (
        <>
            <CustomJumbotron
                title="Busqueda de superHeroes"
                description="Descubre, explora y administra super heroes y villanos"
            />
            <CustomBreadcrumbs
                url="search"
            // breadcrumbs={
            // [
            //     { label: "Home", to: "/" },
            //     { label: "Home", to: "/" },
            //     { label: "Home", to: "/" },
            // ]
            // }
            />

            <HeroStats />
            {/* Filters and Controls section */}
            <SearchControls />
        </>
    )
}
export default SearchPage;