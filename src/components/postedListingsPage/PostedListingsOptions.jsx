// react icons
import { BsGrid3X3Gap } from "react-icons/bs";
import { FaFilter, FaListUl, FaSearch } from "react-icons/fa";


const PostedListingsOptions = ({ layout, setLayout, conditionOption, setConditionOption }) => {
    return (
        <section className="pb-3 mb-4 border-bottom">
            <div className="row">

                <div className="col-6">
                    <button type='button' className={conditionOption == 'search' ? "layout-selected layout-btn btn text-muted me-2" : "layout-btn btn text-muted me-2"} onClick={() => setConditionOption('search')}>
                        <FaFilter size={18} />
                    </button>
                    <button type='button' className={conditionOption == 'filter' ? "layout-selected layout-btn btn text-muted" : "layout-btn btn text-muted"} onClick={() => setConditionOption('filter')}>
                        <FaSearch size={18} />
                    </button>
                </div>

                <div className="col-6 text-end">
                    <button type='button' className={layout == 'grid' ? "layout-selected layout-btn btn text-muted me-2" : "layout-btn btn text-muted me-2"} onClick={() => setLayout('grid')}>
                        <BsGrid3X3Gap size={18} />
                    </button>
                    <button type='button' className={layout == 'list' ? "layout-selected layout-btn btn text-muted" : "layout-btn btn text-muted"} onClick={() => setLayout('list')}>
                        <FaListUl size={18} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default PostedListingsOptions