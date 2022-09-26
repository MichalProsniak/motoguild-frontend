import ReactPaginate from "react-paginate"

export default function Pagination(params)
{

    
    function handlePageClick(data)
    {  
        let currentPage = data.selected + 1
        params.setCurrentPage(currentPage)
    }

    return (
        <div className="custom-pagination">
            <ReactPaginate 
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                pageCount={params.pagination["TotalPages"]}
                marginPagesDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'custom-page-item'}
                pageLinkClassName={'custom-page-link'}
                previousClassName={'custom-page-item'}
                previousLinkClassName={'custom-page-link'}
                nextClassName={'custom-page-item'}
                nextLinkClassName={'custom-page-link'}
                breakClassName={'custom-page-item'}
                breakLinkClassName={'custom-page-link'}
                activeClassName={'custom-active'}
                // pageClassName={'page-item'}
                // pageLinkClassName={'page-link'}
                // previousClassName={'page-item'}
                // previousLinkClassName={'page-link'}
                // nextClassName={'page-item'}
                // nextLinkClassName={'page-link'}
                // breakClassName={'page-item'}
                // breakLinkClassName={'page-link'}
                // activeClassName={'active'}
            />
        </div>
    )
}