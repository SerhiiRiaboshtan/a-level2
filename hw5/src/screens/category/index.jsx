import { gql } from "@apollo/client";
import { client } from "../../gql";
import { useState } from "react";
// import { store } from "../..";
import CategoryDraw from "./categoryDraw";
const Category = () =>{
    const[category, setCategory]=useState([]);
    const handleGetCategory = () => {
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
                    name,
                    parent{
                        _id,
                        name
                    },
                    subCategories{
                        name,
                        parent{
                            _id,
                            name
                        },
                        subCategories{
                            name,
                            parent{
                                _id,
                                name
                            },
                            subCategories{
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
            //   console.log(result.data.CategoryFind)
              setCategory([...result.data.CategoryFind]);
            //   console.log('data=>',result.data.CategoryFind);
            //    console.log(category);
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
            <button onClick={handleGetCategory}>Данные</button>
            <CategoryDraw props={category} />
        </div>
    )
}

export default Category;