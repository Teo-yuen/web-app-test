
type PageProps = {
  params: {
    searchTerm: string
  }
}

export async function Search(searchTerm: string) {
}

async function SearchResults({ params: { searchTerm } }: PageProps) {

  const searchResults = await Search(searchTerm);

  return (
    <div>SearchResults</div>
  )
}

export default SearchResults