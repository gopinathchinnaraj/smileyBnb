import ClientOnly from "./Components/ClientOnly";
import Container from "./Components/Container";
import EmptyState from "./Components/EmptyState";
import ListingCard from "./Components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";

interface HomeProps {
  searchParams: IListingsParams  
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  const isEmpty = true;

  // if(isEmpty) {
  //   return(
  //     <ClientOnly >
  //       <EmptyState showReset/>
  //     </ClientOnly>
  //     )
  // }

  return (
    <ClientOnly >
      <Container>
        <br />
        <div className="
         pt-24
         grid
         grid-cols-1
         sm:grid-cols-2
         md:grid-cols-3
         lg:grid-cols-4
         xl:grid-cols-5
         2xl:grid-cols-6
         gap-8 
        ">
          {listings.map((listing: any) => {
            return (
              <ListingCard 
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            )
          })}
        </div>
      </Container>
    </ClientOnly>
  )
}

export default Home;