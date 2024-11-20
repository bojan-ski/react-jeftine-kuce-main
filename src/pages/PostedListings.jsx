import React, { useEffect, useState } from 'react'
// context
import { useGlobalContext } from "../context.jsx";
// components
import PageLocation from "../components/PageLocation.jsx"
import PageHeader from '../components/PageHeader.jsx';
import NoDataAvailableMessage from "../components/NoDataAvailableMessage.jsx";
import PostedListingsOptions from "../components/postedListingsPage/PostedListingsOptions.jsx";
import PostedListingsConditionOption from '../components/postedListingsPage/PostedListingsConditionOption.jsx';
import PostedListingsContainer from "../components/postedListingsPage/PostedListingsContainer.jsx";
import Pagination from '../components/Pagination.jsx';


const PostedListings = () => {
  const { listings, fetchListings, curListingsPage, isListingsPageLoading, condition } = useGlobalContext()

  const [conditionOption, setConditionOption] = useState('search')
  const [layout, setLayout] = useState('grid')

  // Fetch the first page on mount
  useEffect(() => {
    console.log('useEffect - PostedListings');

    if (listings.length == 0){
      fetchListings();
    }
  }, []);

  return (
    <div className="posted-listings-page">

      {/* page location */}
      <PageLocation />

      <PageHeader title='Oglasi' />

      <div className="container">

        {/* options - layout & search or filter */}
        <PostedListingsOptions layout={layout} setLayout={setLayout} conditionOption={conditionOption} setConditionOption={setConditionOption} />

        {/* search & filter features*/}
        <PostedListingsConditionOption conditionOption={conditionOption}/>

        <section className='listings-list mb-5'>
          {!listings || listings.length == 0 ? (
            <NoDataAvailableMessage text='objavljenih oglasa' />
          ) : (
            <>
              <PostedListingsContainer layout={layout} listings={listings} />

              <Pagination fetchData={fetchListings} page={curListingsPage} queryParam={condition} isLoading={isListingsPageLoading} />
            </>
          )}
        </section>
      </div>
    </div>
  )
}

export default PostedListings