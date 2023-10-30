import React from 'react';


function Category ({category}) {
    console.log('category._id in Category=>',category._id,'category.name in Category=>',category.name );
    return (
        <>
            <div key={category._id}>{category.name}</div>
            {category.subCategories && category.subCategories.length>0 && 
                (<div style={{margin:" 0 0 0 33px"}}>{category.subCategories.map((child) => 
                    <Category key={child._id} category={child}/>)}
                    
                </div>)
            }
        </>
    )
}

const CategoryDraw2 = ({category}) => {
    console.log('category in CategoryDraw2=>',category);
    return (
        <div className="treeCategory">
            {category.map((category, index) => <div key={index}><Category category={category}/></div>)}
        </div>
    );
};

export default CategoryDraw2;