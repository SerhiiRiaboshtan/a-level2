import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

import styles from './category.module.css';
import { actionSetCurrent } from '../redux/reducers/categoryReducer';

function Category ({category}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let closuresData ={id:category._id, name:category.name};
    const handlerClick = () => {
        dispatch(actionSetCurrent(closuresData.id));
        navigate(`/category/${closuresData.id}`);
    }

    return (
        <>
            <TreeItem nodeId={category._id} label={category.name} onClick={handlerClick} >
                {category.subCategories && category.subCategories.length>0 && 
                    (<div>
                        {category.subCategories.map((child) => 
                            <Category 
                                key={child._id} 
                                category={child}
                            />)
                        }
                    </div>)
                }
            </TreeItem>
        </>
    )
}

export default function CategoryDraw({category}) {
  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
        <div className={styles.categoryContainer}>
            {category.map((category, index) => <div key={index}><Category category={category}/></div>)}
        </div>  
      </TreeView>
    </Box>
  );
}