const CategoryDraw = (category) => {
    // console.log('CategoryDraw=>',category);
    if(category.props.length) console.log('CategoryDraw.props =>',category.props, 'CategoryDraw.props.length=>',category.props.length);
    const listCategory= category.props.map((prop) => {
        function getSubcategories (category) {
            if(category.subCategories && category.subCategories.length) {
                console.log('Идем глубже ->', category.name);
                category.subCategories.map((category)=>getSubcategories(category));
            }
            else {
                console.log('Некуда идти глубже ->', category.name);
                return (
                    <li key={category._id}>
                        {category.name}
                    </li>
                )
            }
        }
        getSubcategories(prop);
        if(prop.subCategories && prop.subCategories.length){
            return (
                <li key={prop._id}>{prop.name}
                    <ul>
                        <li>
                            {` (Есть вложенные категории)`}
                        </li>
                    </ul>
                </li>
            )
        }
        else {
            return (
                <li key={prop._id}>
                    {prop.name}
                </li>
            )
        }
    })
    return (
        <>
            <div>CategoryDraw</div>
            <ul>{listCategory}</ul>             
        </>    
        
    )
}

export default CategoryDraw;