import { gql } from "@apollo/client";
import { client } from "../gql"
import { useState, useEffect } from "react";
import CategoryDraw from "./CategoryDraw";

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
                <CategoryDraw category={category}/>
            </div>
        </div>
    )
}

export default Category;