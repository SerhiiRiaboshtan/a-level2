import { gql } from "@apollo/client";
import { client } from "../../gql";
import { useState, useEffect } from "react";
// import { store } from "../..";
// import CategoryDraw2 from "./categoryDraw2";
import CategoryDraw3 from "./categoryDraw3";

const Category = () =>{
    const[category, setCategory]=useState([]);
    useEffect(() =>{
        handleGetCategory();
    }, [])
    function handleGetCategory() {
        client.query({
            query: gql`
            query rootCats($q: String) {
                CategoryFind(query: $q) {
                  _id,
                  name,
                  parent {
                    _id
                    name
                  },
                  subCategories{
                    _id,
                    name,
                    parent{
                        _id,
                        name
                    },
                    subCategories{
                        _id,
                        name,
                        parent{
                            _id,
                            name
                        },
                        subCategories{
                            _id,
                            name,
                            parent{
                                _id,
                                name
                            },
                            subCategories{
                                _id,
                                name,
                                parent{
                                    _id,
                                    name
                                },
                            }
                        }
                    }
                  }
                }
            }`,
            variables: {q:"[{\"parent\":null}]"}
          })
          .then((result) => {
              setCategory([...result.data.CategoryFind]);
          })
          .catch((error) => {
              console.log('Error GET_ROOT_CATS', error)
          });
    }
    return (
        <div>
            <div>
                <h2>Category</h2>
            </div>
            {/* <button onClick={handleGetCategory}>Получить список категорий товаров</button> */}
            {/* <div><CategoryDraw2 category={category} /></div> */}
            <div><CategoryDraw3 category={category}/></div>
        </div>
    )
}

export default Category;