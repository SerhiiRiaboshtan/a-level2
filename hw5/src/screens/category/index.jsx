import { gql } from "@apollo/client";
import { client } from "../../gql";
import { useState } from "react";
// import { store } from "../..";
import CategoryDraw2 from "./categoryDraw2";
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
            <button onClick={handleGetCategory}>Получить список категорий товаров</button>
            <CategoryDraw2 category={category} />
        </div>
    )
}

export default Category;