import styles from './styles.module.scss';
import FilterProperties from './filter-properties'
const SearchProperties  = ()=>{

    return (<div>
       
       <div className={styles.bgBuildings}>
        <div className="row justify-content-center mt-3" >
            <div className="row mt-5">
            <img className={styles.logoBrightness} width="250px" src="https://res.cloudinary.com/graanacom/image/upload/h_100/v1592981512/graanaweb/LogoIsolated.png" alt="Graana Property filters" />

            </div>
        </div>
        <div className="row justify-content-center">
            <p style={{fontSize: '15px', marginBottom:'40px' , opacity : '0.7', color:'white'}} className='text-center'>Pakistan's Smartest Property Portal</p>

            </div>

        <div className="row">
            <div className="mx-auto w-50 bg-light rounded">
                <FilterProperties />
            </div>
        </div>

       </div>
    </div>)
}

export default SearchProperties;